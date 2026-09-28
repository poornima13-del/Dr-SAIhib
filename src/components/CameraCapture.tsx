import React, { useRef, useState } from 'react';
import { Language } from '../types';
import { Camera, ImagePlus, Trash2, X, Info } from 'lucide-react';
import { translations } from '../data/translations';

interface CameraCaptureProps {
  language: Language;
  photos: string[];
  onPhotosChange: (photos: string[]) => void;
  maxPhotos?: number;
}

export const CameraCapture: React.FC<CameraCaptureProps> = ({
  language,
  photos,
  onPhotosChange,
  maxPhotos = 3
}) => {
  const t = translations[language] || translations.en;
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLiveCameraOpen, setIsLiveCameraOpen] = useState(false);
  const [cameraStream, setCameraStream] = useState<MediaStream | null>(null);
  const [previewPhoto, setPreviewPhoto] = useState<string | null>(null);

  // File input handler (<input type="file" capture="environment">)
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const remainingSlots = maxPhotos - photos.length;
    const filesToRead = Array.from(files).slice(0, remainingSlots);

    filesToRead.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (loadEvent) => {
        const result = loadEvent.target?.result as string;
        if (result) {
          onPhotosChange([...photos, result]);
        }
      };
      reader.readAsDataURL(file);
    });

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Optional live preview stream
  const startLiveCamera = async () => {
    if (!navigator.mediaDevices?.getUserMedia) {
      fileInputRef.current?.click();
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { ideal: 'environment' } },
        audio: false
      });
      setCameraStream(stream);
      setIsLiveCameraOpen(true);
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.warn('getUserMedia camera failed, falling back to file input:', err);
      fileInputRef.current?.click();
    }
  };

  const captureLiveSnapshot = () => {
    if (!videoRef.current) return;
    const video = videoRef.current;
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth || 640;
    canvas.height = video.videoHeight || 480;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const dataUrl = canvas.toDataURL('image/jpeg', 0.85);
      onPhotosChange([...photos, dataUrl]);
    }
    stopLiveCamera();
  };

  const stopLiveCamera = () => {
    if (cameraStream) {
      cameraStream.getTracks().forEach((track) => track.stop());
      setCameraStream(null);
    }
    setIsLiveCameraOpen(false);
  };

  const handleDeletePhoto = (index: number) => {
    const updated = photos.filter((_, i) => i !== index);
    onPhotosChange(updated);
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-3xl p-4 sm:p-5 border border-slate-200 dark:border-slate-700 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Camera className="w-5 h-5 text-teal-600 dark:text-teal-400" />
          <h3 className="font-bold text-base text-slate-800 dark:text-slate-100">
            {language === 'hi' ? 'घाव / चकत्ते की फोटो जोड़ें' : language === 'kn' ? 'ಗಾಯ / ಗುಳ್ಳೆಯ ಫೋಟೋ ಸೇರಿಸಿ' : 'Show Rash / Wound / Swelling Photo'}
          </h3>
        </div>
        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
          {photos.length} / {maxPhotos}
        </span>
      </div>

      {/* Honest UI Notice */}
      <div className="flex items-start gap-2 p-2.5 rounded-2xl bg-teal-50/60 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-900/60 text-xs text-teal-900 dark:text-teal-200 mb-4">
        <Info className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          {language === 'hi'
            ? 'फोटो केवल आपके फोन में सुरक्षित रहती है ताकि आप अपनी आशा दीदी या डॉक्टर को दिखा सकें। डॉक्टर SAIहिब फोटो से नहीं, आपके उत्तरों से स्वास्थ्य सलाह देते हैं।'
            : language === 'kn'
            ? 'ಫೋಟೋ ನಿಮ್ಮ ಫೋನ್‌ನಲ್ಲೇ ಉಳಿಯುತ್ತದೆ ಮತ್ತು ಡಾಕ್ಟರ್ ಅಥವಾ ಆಶಾ ಕಾರ್ಯಕರ್ತೆಗೆ ತೋರಿಸಲು ಬಳಸಲಾಗುತ್ತದೆ. ಡಾ. SAIಹಿಬ್ ನಿಮ್ಮ ಉತ್ತರಗಳನ್ನು ಆಧರಿಸಿ ಸಲಹೆ ನೀಡುತ್ತಾರೆ.'
            : 'The photo is saved offline on your device to show your ASHA worker or doctor. Dr SAIhib uses your questions and answers, not the picture, to provide guidance.'}
        </p>
      </div>

      {/* Photo Previews */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        {photos.map((photo, idx) => (
          <div key={idx} className="relative aspect-square rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 group shadow-xs">
            <img
              src={photo}
              alt={`Wound photo ${idx + 1}`}
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => setPreviewPhoto(photo)}
            />
            <button
              type="button"
              onClick={() => handleDeletePhoto(idx)}
              className="absolute top-1 right-1 p-1 rounded-full bg-rose-600 text-white shadow-md hover:bg-rose-700 transition"
              title="Delete photo"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}

        {/* Add photo button */}
        {photos.length < maxPhotos && (
          <button
            type="button"
            onClick={startLiveCamera}
            className="aspect-square rounded-2xl border-2 border-dashed border-teal-400 dark:border-teal-600 hover:bg-teal-50 dark:hover:bg-teal-950/20 flex flex-col items-center justify-center gap-1.5 text-teal-700 dark:text-teal-300 font-bold text-xs transition"
          >
            <ImagePlus className="w-6 h-6 text-teal-500" />
            <span>{language === 'hi' ? 'फोटो लें' : language === 'kn' ? 'ಫೋಟೋ ತೆಗೆಯಿರಿ' : 'Add Photo'}</span>
          </button>
        )}
      </div>

      {/* Hidden standard HTML file input with capture="environment" for all mobile phones */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        className="hidden"
        onChange={handleFileChange}
      />

      {/* Live Camera Viewfinder Modal */}
      {isLiveCameraOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center p-4">
          <div className="relative w-full max-w-sm bg-black rounded-3xl overflow-hidden border border-slate-700">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              className="w-full aspect-3/4 object-cover"
            />
            <button
              onClick={stopLiveCamera}
              className="absolute top-3 right-3 p-2 rounded-full bg-black/60 text-white"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="absolute bottom-4 inset-x-0 flex justify-center">
              <button
                type="button"
                onClick={captureLiveSnapshot}
                className="w-16 h-16 rounded-full border-4 border-white bg-teal-500 flex items-center justify-center shadow-lg active:scale-95 transition"
              >
                <div className="w-12 h-12 rounded-full bg-white" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Full Size Preview Modal */}
      {previewPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setPreviewPhoto(null)}
        >
          <div className="relative max-w-md w-full bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl p-2">
            <img src={previewPhoto} alt="Full preview" className="w-full rounded-2xl max-h-[70vh] object-contain" />
            <button
              onClick={() => setPreviewPhoto(null)}
              className="mt-3 w-full py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 font-bold text-sm"
            >
              {t.close}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
