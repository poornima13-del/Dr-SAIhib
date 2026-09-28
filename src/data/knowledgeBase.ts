import { Symptom, Condition } from '../types';

export const SYMPTOMS_LIST: Symptom[] = [
  // General
  {
    id: 'fever',
    nameKey: 'fever',
    category: 'general',
    bodyParts: ['head', 'skin'],
    emoji: '🌡️',
    color: '#FF6B6B',
    keywords: {
      en: ['fever', 'temperature', 'hot', 'chills', 'shivering', 'warm'],
      hi: ['बुखार', 'ताप', 'गरम', 'ठंड', 'कांपना', 'bukhar', 'taap'],
      kn: ['ಜ್ವರ', 'ಬಿಸಿ', 'ಚಳಿ', 'ನಡುಕ', 'jwara', 'jvara', 'bisi']
    }
  },
  {
    id: 'fatigue',
    nameKey: 'fatigue',
    category: 'general',
    bodyParts: ['arms', 'legs'],
    emoji: '🥱',
    color: '#FFC93C',
    keywords: {
      en: ['tired', 'weakness', 'fatigue', 'no energy', 'drowsy', 'exhausted'],
      hi: ['कमजोरी', 'थकान', 'सुस्ती', 'थकावट', 'kamzori', 'thakan'],
      kn: ['ಆಯಾಸ', 'ಸುಸ್ತು', 'ನಿಶ್ಯಕ್ತಿ', 'ಬೇಸರ', 'susthu', 'ayasa']
    }
  },
  {
    id: 'dizziness',
    nameKey: 'dizziness',
    category: 'general',
    bodyParts: ['head'],
    emoji: '💫',
    color: '#7B5CFA',
    keywords: {
      en: ['dizziness', 'fainting', 'spinning', 'giddy', 'lightheaded'],
      hi: ['चक्कर', 'बेहोशी', 'सिर घूमना', 'chakkar', 'behosh'],
      kn: ['ತಲೆಸುತ್ತು', 'ಮೂರ್ಛೆ', 'ತಿರುಗುವಿಕೆ', 'thale suthu', 'chakkar']
    }
  },
  {
    id: 'unexplained_weight_loss',
    nameKey: 'unexplained_weight_loss',
    category: 'warning_signs',
    bodyParts: ['stomach'],
    emoji: '⚖️',
    color: '#7B5CFA',
    isCancerWarning: true,
    keywords: {
      en: ['weight loss', 'losing weight', 'clothes loose', 'thin'],
      hi: ['वजन घटना', 'दुबला होना', 'वजन कम', 'vajan kam'],
      kn: ['ತೂಕ ಇಳಿಕೆ', 'ತೂಕ ಕಡಿಮೆ', 'ಸಣ್ಣಗಾಗುವುದು', 'thooka']
    }
  },
  {
    id: 'night_sweats',
    nameKey: 'night_sweats',
    category: 'warning_signs',
    bodyParts: ['skin'],
    emoji: '💦',
    color: '#7B5CFA',
    isCancerWarning: true,
    keywords: {
      en: ['night sweats', 'sweating at night', 'drenched at night'],
      hi: ['रात में पसीना', 'रात को पसीना आना', 'raat me paseena'],
      kn: ['ರಾತ್ರಿ ಬೆವರು', 'ರಾತ್ರಿ ಬೆವರೋದು', 'raathri bevaru']
    }
  },

  // Head & Face
  {
    id: 'headache',
    nameKey: 'headache',
    category: 'head_face',
    bodyParts: ['head'],
    emoji: '🤕',
    color: '#FF6B6B',
    keywords: {
      en: ['headache', 'head pain', 'throbbing head', 'migraine'],
      hi: ['सिरदर्द', 'सर दर्द', 'माथा दर्द', 'sirdard', 'sar dard'],
      kn: ['ತಲೆನೋವು', 'ತಲೆ ಭಾರ', 'thale novu', 'tale novu']
    }
  },
  {
    id: 'severe_sudden_headache',
    nameKey: 'severe_sudden_headache',
    category: 'head_face',
    bodyParts: ['head'],
    emoji: '⚡',
    color: '#FF6B6B',
    isRedFlag: true,
    keywords: {
      en: ['sudden severe headache', 'worst headache', 'thunderclap'],
      hi: ['अचानक बहुत तेज सिरदर्द', 'बिजली जैसा सिरदर्द'],
      kn: ['ತೀವ್ರ ಹಠಾತ್ ತಲೆನೋವು', 'ಸಿಡಿಲಿನಂತಹ ತಲೆನೋವು']
    }
  },
  {
    id: 'mouth_ulcer_persistent',
    nameKey: 'mouth_ulcer_persistent',
    category: 'warning_signs',
    bodyParts: ['throat'],
    emoji: '👄',
    color: '#7B5CFA',
    isCancerWarning: true,
    keywords: {
      en: ['mouth ulcer', 'mouth sore', 'white patch', 'red patch', 'tongue sore'],
      hi: ['मुंह का छाला', 'मुंह में घाव', 'सफेद दाग मुंह में', 'munh ke chale'],
      kn: ['ಬಾಯಿ ಹುಣ್ಣು', 'ಬಾಯಿಯ ಗಾಯ', 'ಬಾಯಲ್ಲಿ ಬಿಳಿ ಕಲೆ', 'bayi hunnu']
    }
  },
  {
    id: 'neck_lump',
    nameKey: 'neck_lump',
    category: 'warning_signs',
    bodyParts: ['throat'],
    emoji: '🪢',
    color: '#7B5CFA',
    isCancerWarning: true,
    keywords: {
      en: ['neck lump', 'throat lump', 'swollen gland', 'knot in neck'],
      hi: ['गले में गांठ', 'गर्दन में गिल्टी', 'गले में सूजन', 'gale me ganth'],
      kn: ['ಕುತ್ತಿಗೆಯಲ್ಲಿ ಗಂಟು', 'ಗಂಟಲಲ್ಲಿ ಗಂಟು', 'kuttigeyalli gantu']
    }
  },
  {
    id: 'facial_droop_speech',
    nameKey: 'facial_droop_speech',
    category: 'head_face',
    bodyParts: ['head'],
    emoji: '🥴',
    color: '#FF6B6B',
    isRedFlag: true,
    keywords: {
      en: ['face drooping', 'slurred speech', 'arm weakness', 'stroke', 'face tilted'],
      hi: ['चेहरा टेढ़ा', 'बोली लड़खड़ाना', 'हाथ में कमजोरी', 'लकवा', 'falij'],
      kn: ['ಮುಖ ವಕ್ರ', 'ಮಾತು ತೊದಲು', 'ಪಾರ್ಶ್ವವಾಯು', 'ಲಕ್ವ', 'lakwa']
    }
  },

  // Chest & Breathing
  {
    id: 'chest_pain',
    nameKey: 'chest_pain',
    category: 'chest_breathing',
    bodyParts: ['chest'],
    emoji: '💔',
    color: '#FF6B6B',
    isRedFlag: true,
    keywords: {
      en: ['chest pain', 'chest pressure', 'heart pain', 'tight chest', 'chest heaviness'],
      hi: ['छाती में दर्द', 'सीने में दर्द', 'सीने में दबाव', 'seene me dard'],
      kn: ['ಎದೆ ನೋವು', 'ಎದೆ ಭಾರ', 'ಎದೆ ಕಿವುಚಿದಂತೆ', 'ede novu', 'ede bhara']
    }
  },
  {
    id: 'breathlessness',
    nameKey: 'breathlessness',
    category: 'chest_breathing',
    bodyParts: ['chest'],
    emoji: '🫁',
    color: '#FF6B6B',
    isRedFlag: true,
    keywords: {
      en: ['breathlessness', 'shortness of breath', 'hard to breathe', 'wheezing', 'asthma'],
      hi: ['सांस फूलना', 'सांस लेने में तकलीफ', 'दमा', 'घबराहट', 'saans phoolna'],
      kn: ['ಉಸಿರಾಟದ ತೊಂದರೆ', 'ಉಬ್ಬಸ', 'ದಮ್ಮು', 'usirata thondare', 'dammu']
    }
  },
  {
    id: 'cough_persistent',
    nameKey: 'cough_persistent',
    category: 'chest_breathing',
    bodyParts: ['chest', 'throat'],
    emoji: '🗣️',
    color: '#FFC93C',
    keywords: {
      en: ['cough', 'coughing', 'dry cough', 'wet cough', 'phlegm', 'khansi'],
      hi: ['खांसी', 'बलगम', 'सूखी खांसी', 'khansi', 'balgam'],
      kn: ['ಕೆಮ್ಮು', 'ಕಫ', 'ಒಣ ಕೆಮ್ಮು', 'kemmu', 'kapha']
    }
  },
  {
    id: 'cough_blood',
    nameKey: 'cough_blood',
    category: 'warning_signs',
    bodyParts: ['chest'],
    emoji: '🩸',
    color: '#FF6B6B',
    isCancerWarning: true,
    isRedFlag: true,
    keywords: {
      en: ['blood in cough', 'coughing blood', 'red phlegm'],
      hi: ['खांसी में खून', 'खून की खांसी', 'khansi me khoon'],
      kn: ['ಕೆಮ್ಮಿನಲ್ಲಿ ರಕ್ತ', 'ರಕ್ತದ ಕೆಮ್ಮು', 'kemminalli raktha']
    }
  },

  // Breast specific
  {
    id: 'breast_lump',
    nameKey: 'breast_lump',
    category: 'warning_signs',
    bodyParts: ['breast'],
    emoji: '🟣',
    color: '#7B5CFA',
    isCancerWarning: true,
    keywords: {
      en: ['breast lump', 'lump in armpit', 'knot in breast', 'breast swelling'],
      hi: ['स्तन में गांठ', 'छाती में गिल्टी', 'कांख में गांठ', 'stan me ganth'],
      kn: ['ಸ್ತನದಲ್ಲಿ ಗಂಟು', 'ಕಂಕುಳಲ್ಲಿ ಗಂಟು', 'stanadalli gantu']
    }
  },
  {
    id: 'breast_skin_changes',
    nameKey: 'breast_skin_changes',
    category: 'warning_signs',
    bodyParts: ['breast'],
    emoji: '🔍',
    color: '#7B5CFA',
    isCancerWarning: true,
    keywords: {
      en: ['nipple discharge', 'dimpling skin', 'nipple turned inward', 'breast redness'],
      hi: ['निप्पल से पानी', 'स्तन की त्वचा में गड्ढा', 'निप्पल अंदर धंसना'],
      kn: ['ಸ್ತನದ ತೊಟ್ಟಿನಿಂದ ದ್ರವ', 'ಚರ್ಮದ ನೆರಿಗೆ', 'ತೊಟ್ಟು ಒಳಮುಖ']
    }
  },

  // Stomach
  {
    id: 'stomach_pain',
    nameKey: 'stomach_pain',
    category: 'stomach',
    bodyParts: ['stomach'],
    emoji: '🤢',
    color: '#2D9CFF',
    keywords: {
      en: ['stomach pain', 'belly pain', 'cramps', 'abdominal pain', 'pet dard'],
      hi: ['पेट दर्द', 'पेट में मरोड़', 'पेट में ऐंठन', 'pet dard', 'pet me marod'],
      kn: ['ಹೊಟ್ಟೆ ನೋವು', 'ಹೊಟ್ಟೆ ಸೆಳೆತ', 'hotte novu']
    }
  },
  {
    id: 'severe_right_stomach_pain',
    nameKey: 'severe_right_stomach_pain',
    category: 'stomach',
    bodyParts: ['stomach'],
    emoji: '🚨',
    color: '#FF6B6B',
    isRedFlag: true,
    keywords: {
      en: ['lower right stomach pain', 'appendix pain', 'sharp right belly'],
      hi: ['पेट के दाएं हिस्से में तेज दर्द', 'अपेंडिक्स का दर्द'],
      kn: ['ಹೊಟ್ಟೆಯ ಬಲಭಾಗದ ತೀವ್ರ ನೋವು', 'ಅಪೆಂಡಿಕ್ಸ್ ನೋವು']
    }
  },
  {
    id: 'vomiting',
    nameKey: 'vomiting',
    category: 'stomach',
    bodyParts: ['stomach'],
    emoji: '🤮',
    color: '#2D9CFF',
    keywords: {
      en: ['vomiting', 'throwing up', 'nausea', 'puking', 'ulti'],
      hi: ['उल्टी', 'जी मिचलाना', 'कै होना', 'ulti', 'ji michlana'],
      kn: ['ವಾಂತಿ', 'ವಾಕರಿಕೆ', 'vanti', 'vakarike']
    }
  },
  {
    id: 'loose_motions',
    nameKey: 'loose_motions',
    category: 'stomach',
    bodyParts: ['stomach'],
    emoji: '💧',
    color: '#00B8A9',
    keywords: {
      en: ['loose motion', 'diarrhea', 'watery stool', 'frequent motions', 'dast'],
      hi: ['दस्त', 'पतले दस्त', 'पेट खराब', 'dast', 'patla dast'],
      kn: ['ಭೇದಿ', 'ಹೊಟ್ಟೆ ತೊಳೆಸುವಿಕೆ', 'ನೀರು ಭೇದಿ', 'bhedi', 'neeru bhedi']
    }
  },
  {
    id: 'severe_acidity',
    nameKey: 'severe_acidity',
    category: 'stomach',
    bodyParts: ['stomach', 'chest'],
    emoji: '🔥',
    color: '#FFC93C',
    keywords: {
      en: ['acidity', 'heartburn', 'sour burps', 'chest burning', 'gas'],
      hi: ['एसिडिटी', 'खट्टी डकार', 'सीने में जलन', 'गैस', 'jalan', 'khatti dakar'],
      kn: ['ಎದೆಯುರಿ', 'ಹುಳಿ ತೇಗು', 'ಗ್ಯಾಸ್ಟ್ರಿಕ್', 'edeyuri', 'huli tegu']
    }
  },

  // Skin & Injury
  {
    id: 'skin_rash',
    nameKey: 'skin_rash',
    category: 'skin_injury',
    bodyParts: ['skin'],
    emoji: '🔴',
    color: '#FF6B6B',
    keywords: {
      en: ['rash', 'skin spots', 'red spots', 'itching', 'skin allergy'],
      hi: ['चकत्ते', 'खुजली', 'दाद', 'एलर्जी', 'लाल दाने', 'chakatte', 'khujli'],
      kn: ['ಗುಳ್ಳೆಗಳು', 'ತುರಿಕೆ', 'ಕಜ್ಜಿ', 'ದದ್ದು', 'thulike', 'daddu']
    }
  },
  {
    id: 'minor_cut_wound',
    nameKey: 'minor_cut_wound',
    category: 'skin_injury',
    bodyParts: ['skin', 'arms', 'legs'],
    emoji: '🩹',
    color: '#7ED957',
    keywords: {
      en: ['cut', 'wound', 'scrape', 'injury', 'bleeding cut'],
      hi: ['घाव', 'चोट', 'कट जाना', 'छिलना', 'ghav', 'chot'],
      kn: ['ಗಾಯ', 'ಏಟು', 'ಕಟ್ ಆಗಿರುವುದು', 'ರಕ್ತ ಸುರಿಯುವ ಗಾಯ', 'gaya', 'etu']
    }
  },
  {
    id: 'burn_injury',
    nameKey: 'burn_injury',
    category: 'skin_injury',
    bodyParts: ['skin', 'arms'],
    emoji: '🔥',
    color: '#FF6B6B',
    keywords: {
      en: ['burn', 'burnt', 'hot water burn', 'fire burn'],
      hi: ['जलना', 'आग से जला', 'गरम पानी से जला', 'jalna'],
      kn: ['ಸುಟ್ಟ ಗಾಯ', 'ಬೆಂಕಿಯಿಂದ ಸುಟ್ಟಿದ್ದು', 'sutta gaya']
    }
  },
  {
    id: 'snake_bite',
    nameKey: 'snake_bite',
    category: 'warning_signs',
    bodyParts: ['legs', 'arms'],
    emoji: '🐍',
    color: '#FF6B6B',
    isRedFlag: true,
    keywords: {
      en: ['snake bite', 'snake', 'insect bite severe', 'poisonous bite'],
      hi: ['सांप का काटना', 'सांप ने काटा', 'सांप', 'zehrila keeda', 'saanp'],
      kn: ['ಹಾವು ಕಡಿತ', 'ಹಾವಿನ ಕಡಿತ', 'ವಿಷಕಾರಿ ಕಡಿತ', 'havu kadita']
    }
  },

  // Urinary & Women's Health
  {
    id: 'burning_urination',
    nameKey: 'burning_urination',
    category: 'urinary_women',
    bodyParts: ['urinary'],
    emoji: '🚽',
    color: '#FFC93C',
    keywords: {
      en: ['burning urination', 'pain in urine', 'frequent urine', 'urine burning', 'uti'],
      hi: ['पेशाब में जलन', 'पेशाब में दर्द', 'बार-बार पेशाब', 'peshab me jalan'],
      kn: ['ಮೂತ್ರ ವಿಸರ್ಜನೆಯಲ್ಲಿ ಉರಿ', 'ಉರಿ ಮೂತ್ರ', 'ಮೂತ್ರದಲ್ಲಿ ನೋವು', 'uri mootra']
    }
  },
  {
    id: 'blood_in_urine',
    nameKey: 'blood_in_urine',
    category: 'warning_signs',
    bodyParts: ['urinary'],
    emoji: '🩸',
    color: '#7B5CFA',
    isCancerWarning: true,
    keywords: {
      en: ['blood in urine', 'red urine', 'pink urine'],
      hi: ['पेशाब में खून', 'लाल पेशाब', 'peshab me khoon'],
      kn: ['ಮೂತ್ರದಲ್ಲಿ ರಕ್ತ', 'ಕೆಂಪು ಮೂತ್ರ', 'mootradalli raktha']
    }
  },
  {
    id: 'abnormal_bleeding_women',
    nameKey: 'abnormal_bleeding_women',
    category: 'warning_signs',
    bodyParts: ['urinary'],
    emoji: '⚠️',
    color: '#7B5CFA',
    isCancerWarning: true,
    keywords: {
      en: ['bleeding between periods', 'bleeding after menopause', 'heavy irregular bleeding'],
      hi: ['माहवारी के बीच खून आना', 'रजोनिवृत्ति के बाद खून', 'अनियमित रक्तस्राव'],
      kn: ['ಮುಟ್ಟು ನಿಂತ ಮೇಲೆ ರಕ್ತಸ್ರಾವ', 'ಮುಟ್ಟಿನ ಮಧ್ಯೆ ರಕ್ತಸ್ರಾವ']
    }
  },

  // Bones & Joints
  {
    id: 'joint_swelling_pain',
    nameKey: 'joint_swelling_pain',
    category: 'bones_joints',
    bodyParts: ['legs', 'arms', 'back'],
    emoji: '🦴',
    color: '#00B8A9',
    keywords: {
      en: ['joint pain', 'knee pain', 'swelling in joints', 'sprain', 'twist'],
      hi: ['जोड़ों में दर्द', 'घुटने में दर्द', 'मोच', 'सूजन', 'jodo me dard', 'moch'],
      kn: ['ಕೀಲು ನೋವು', 'ಮಂಡಿ ನೋವು', 'ಉಳುಕು', 'ಊತ', 'keelu novu', 'mandi novu']
    }
  },
  {
    id: 'back_pain',
    nameKey: 'back_pain',
    category: 'bones_joints',
    bodyParts: ['back'],
    emoji: '🧍',
    color: '#00B8A9',
    keywords: {
      en: ['back pain', 'lower back pain', 'spine pain', 'kamar dard'],
      hi: ['कमर दर्द', 'पीठ दर्द', 'रीढ़ की हड्डी में दर्द', 'kamar dard'],
      kn: ['ಬೆನ್ನು ನೋವು', 'ಸೊಂಟ ನೋವು', 'bennu novu', 'sonta novu']
    }
  }
];

export const CONDITIONS_LIST: Condition[] = [
  // 1. Common Cold
  {
    id: 'common_cold',
    name: {
      en: 'Common Cold / Viral Nasopharyngitis',
      hi: 'सामान्य जुकाम / सर्दी',
      kn: 'ಸಾಮಾನ್ಯ ಶೀತ / ನೆಗಡಿ'
    },
    category: 'respiratory',
    severity: 'mild',
    primarySymptoms: ['cough_persistent', 'fever', 'headache'],
    secondarySymptoms: ['fatigue'],
    summary: {
      en: 'A mild viral upper respiratory tract infection that typically resolves on its own within 5 to 7 days.',
      hi: 'नाक और गले का हल्का वायरल संक्रमण जो 5 से 7 दिनों में सामान्य घरेलू देखभाल से ठीक हो जाता है।',
      kn: 'ಮೂಗು ಮತ್ತು ಗಂಟಲಿನ ಸಾಮಾನ್ಯ ವೈರಲ್ ಸೋಂಕು, ಇದು 5 ರಿಂದ 7 ದಿನಗಳಲ್ಲಿ ಸಾಮಾನ್ಯವಾಗಿ ವಾಸಿಯಾಗುತ್ತದೆ.'
    },
    whatToDo: {
      en: [
        'Drink plenty of warm fluids (warm water, tulsi/ginger tea, clear broth).',
        'Take warm water steam inhalation twice daily.',
        'Gargle with warm salt water 2-3 times a day.',
        'Rest well and keep yourself warm.'
      ],
      hi: [
        'खूब गुनगुना पानी और तुलसी-अदरक का काढ़ा पिएं।',
        'दिन में दो बार भाप (स्टीम) लें।',
        'हल्के गर्म नमक वाले पानी से गरारे करें।',
        'पर्याप्त आराम करें और ठंड से बचें।'
      ],
      kn: [
        'ಸಾಕಷ್ಟು ಬಿಸಿ ನೀರು ಮತ್ತು ಶುಂಠಿ-ತುಳಸಿ ಕಷಾಯ ಕುಡಿಯಿರಿ.',
        'ದಿನಕ್ಕೆ ಎರಡು ಬಾರಿ ಬಿಸಿನೀರಿನ ಹಬೆ (ಸ್ಟೀಮ್) ತೆಗೆದುಕೊಳ್ಳಿ.',
        'ಬಿಸಿ ಉಪ್ಪು ನೀರಿನಿಂದ ಗಂಟಲು ಮುಕ್ಕಳಿಸಿ.',
        'ಚೆನ್ನಾಗಿ ವಿಶ್ರಾಂತಿ ಪಡೆಯಿರಿ.'
      ]
    },
    medicines: {
      en: [
        'Paracetamol (500mg) for adult body ache or mild fever, taken with food (max 3 times/day).',
        'Saline nasal drops for blocked nose.',
        'WARNING: Avoid antibiotics; viral colds do not need or respond to antibiotics.'
      ],
      hi: [
        'हल्के दर्द या बुखार के लिए पैरासिटामोल (500mg) भोजन के बाद (दिन में अधिकतम 3 बार)।',
        'बंद नाक के लिए सलाइन नेजल ड्रॉप्स।',
        'चेतावनी: एंटीबायोटिक दवाएं न लें; वायरल जुकाम में इनकी जरूरत नहीं होती।'
      ],
      kn: [
        'ಮೈಕೈ ನೋವು ಅಥವಾ ಜ್ವರಕ್ಕೆ ಪ್ಯಾರಾಸಿಟಮಾಲ್ (500mg) ಊಟದ ನಂತರ (ದಿನಕ್ಕೆ ಗರಿಷ್ಠ 3 ಬಾರಿ).',
        'ಮೂಗು ಕಟ್ಟಿದ್ದರೆ ನಾರ್ಮಲ್ ಸಲೈನ್ ಡ್ರಾಪ್ಸ್ ಬಳಸಿ.',
        'ಎಚ್ಚರಿಕೆ: ವೈದ್ಯರ ಸಲಹೆಯಿಲ್ಲದೆ ಆಂಟಿಬಯೋಟಿಕ್ಸ್ ತೆಗೆದುಕೊಳ್ಳಬೇಡಿ.'
      ]
    },
    precautions: {
      dos: {
        en: ['Cover mouth when coughing', 'Wash hands frequently with soap', 'Drink warm liquids'],
        hi: ['खांसते समय मुंह ढकें', 'साबुन से हाथ धोते रहें', 'गुनगुना पानी पिएं'],
        kn: ['ಕೆಮ್ಮುವಾಗ ಬಾಯಿ ಮುಚ್ಚಿಕೊಳ್ಳಿ', 'ಸಾಬೂನಿನಿಂದ ಕೈ ತೊಳೆಯಿರಿ', 'ಬಿಸಿ ನೀರು ಕುಡಿಯಿರಿ']
      },
      donts: {
        en: ['Do not drink iced water', 'Do not take random antibiotics', 'Avoid crowded spaces'],
        hi: ['ठंडा या बासी खाना न खाएं', 'बिना डॉक्टर के एंटीबायोटिक न लें', 'भीड़भाड़ से बचें'],
        kn: ['ತಣ್ಣನೆಯ ನೀರು ಕುಡಿಯಬೇಡಿ', 'ಅನಗತ್ಯ ಔಷಧಿ ಸೇವಿಸಬೇಡಿ', 'ಜನಸಂದಣಿಯಿಂದ ದೂರವಿರಿ']
      }
    },
    whenToSeeDoctor: {
      en: ['Fever lasts more than 3 days', 'Difficulty breathing or chest pain develops', 'Severe throat pain preventing swallowing'],
      hi: ['बुखार 3 दिन से ज्यादा रहे', 'सांस लेने में तकलीफ या सीने में दर्द हो', 'गले में इतना तेज दर्द कि थूक भी न निगला जाए'],
      kn: ['ಜ್ವರ 3 ದಿನಕ್ಕಿಂತ ಹೆಚ್ಚು ಮುಂದುವರಿದರೆ', 'ಉಸಿರಾಟದ ತೊಂದರೆ ಅಥವಾ ಎದೆ ನೋವು ಕಾಣಿಸಿಕೊಂಡರೆ', 'ನುಂಗಲು ಅಸಾಧ್ಯವಾದ ಗಂಟಲು ನೋವು']
    }
  },

  // 2. Flu / Influenza
  {
    id: 'flu_influenza',
    name: {
      en: 'Flu (Influenza)',
      hi: 'इन्फ्लूएंजा (फ्लू बुखार)',
      kn: 'ಫ್ಲೂ ಜ್ವರ (ಇನ್‌ಫ್ಲುಯೆಂಜಾ)'
    },
    category: 'respiratory',
    severity: 'moderate',
    primarySymptoms: ['fever', 'headache', 'fatigue', 'cough_persistent'],
    secondarySymptoms: ['joint_swelling_pain'],
    summary: {
      en: 'A respiratory virus causing sudden high fever, heavy body ache, and exhaustion.',
      hi: 'अचानक तेज बुखार, पूरे शरीर में दर्द और भारी कमजोरी पैदा करने वाला फ्लू वायरस।',
      kn: 'ತೀವ್ರ ಜ್ವರ, ಮೈಕೈ ನೋವು ಮತ್ತು ಅತಿಯಾದ ಆಯಾಸ ತರುವ ವೈರಲ್ ಜ್ವರ.'
    },
    whatToDo: {
      en: [
        'Complete bed rest for at least 3-4 days.',
        'Continuous fluid intake: water, lemon water, tender coconut water.',
        'Sponge forehead with room-temperature water if fever is high.'
      ],
      hi: [
        '3-4 दिन तक पूरा आराम करें।',
        'पर्याप्त तरल पदार्थ लें: पानी, नींबू पानी, नारियल पानी।',
        'बुखार ज्यादा होने पर सामान्य पानी की ठंडी पट्टी माथे पर रखें।'
      ],
      kn: [
        '3-4 ದಿನಗಳ ಕಾಲ ಸಂಪೂರ್ಣ ವಿಶ್ರಾಂತಿ ಪಡೆಯಿರಿ.',
        'ಸಾಕಷ್ಟು ದ್ರವಾಹಾರ ಸೇವಿಸಿ: ನೀರು, ನಿಂಬೆ ಹಣ್ಣಿನ ಶರಬತ್ತು, ಎಳನೀರು.',
        'ಜ್ವರ ಹೆಚ್ಚಿದ್ದರೆ ಸಾಮಾನ್ಯ ನೀರಿನಿಂದ ಹಣೆ ಒರೆಸಿ.'
      ]
    },
    medicines: {
      en: [
        'Paracetamol (500mg) for fever relief.',
        'ORS (Oral Rehydration Salts) if feeling dehydrated.',
        'WARNING: Do NOT give aspirin to children or teenagers due to risk of Reye syndrome.'
      ],
      hi: [
        'बुखार के लिए पैरासिटामोल (500mg)।',
        'कमजोरी दूर करने के लिए ओआरएस (ORS) का घोल पिएं।',
        'चेतावनी: बच्चों या किशोरों को एस्पिरिन (Aspirin) कभी न दें।'
      ],
      kn: [
        'ಜ್ವರಕ್ಕೆ ಪ್ಯಾರಾಸಿಟಮಾಲ್ (500mg).',
        'ಆಯಾಸ ನೀಗಿಸಲು ಒ.ಆರ್.ಎಸ್ (ORS) ದ್ರಾವಣ ಕುಡಿಯಿರಿ.',
        'ಎಚ್ಚರಿಕೆ: ಮಕ್ಕಳಿಗೆ ಎಂದಿಗೂ ಆಸ್ಪಿರಿನ್ ನೀಡಬೇಡಿ.'
      ]
    },
    precautions: {
      dos: {
        en: ['Stay isolated at home', 'Wear a mask around family members', 'Monitor temperature every 6 hours'],
        hi: ['घर पर अलग कमरे में रहें', 'परिवार वालों के सामने मास्क लगाएं', 'हर 6 घंटे में बुखार नापें'],
        kn: ['ಮನೆಯಲ್ಲೇ ವಿಶ್ರಾಂತಿ ಪಡೆಯಿರಿ', 'ಮಾಸ್ಕ್ ಧರಿಸಿ', 'ಜ್ವರವನ್ನು ಗಮನಿಸುತ್ತಿರಿ']
      },
      donts: {
        en: ['Do not do heavy physical work', 'Avoid taking aspirin without prescription', 'Avoid cold drinks'],
        hi: ['भारी शारीरिक काम न करें', 'बिना डॉक्टर की सलाह के एस्पिरिन न लें', 'ठंडी चीजें न पिएं'],
        kn: ['ಕಠಿಣ ಕೆಲಸ ಮಾಡಬೇಡಿ', 'ಆಸ್ಪಿರಿನ್ ತೆಗೆದುಕೊಳ್ಳಬೇಡಿ', 'ತಣ್ಣನೆಯ ಆಹಾರ ತ್ಯಜಿಸಿ']
      }
    },
    whenToSeeDoctor: {
      en: ['Shortness of breath or blue lips', 'Persistent high fever not responding to paracetamol', 'Confusion or extreme drowsiness'],
      hi: ['सांस फूलने लगे या होंठ नीले पड़ने लगें', 'पैरासिटामोल के बाद भी बुखार कम न हो', 'अत्यधिक सुस्ती या बेहोशी जैसी हालत'],
      kn: ['ಉಸಿರಾಟ ಕಷ್ಟವಾದರೆ ಅಥವಾ ತುಟಿಗಳು ನೀಲಿ ಬಣ್ಣಕ್ಕೆ ತಿರುಗಿದರೆ', 'ಔಷಧಿ ತೆಗೆದುಕೊಂಡರೂ ಜ್ವರ ಇಳಿಯದಿದ್ದರೆ', 'ಪ್ರಜ್ಞೆ ತಪ್ಪುವ ಸ್ಥಿತಿ']
    }
  },

  // 3. Dengue-like illness
  {
    id: 'dengue_like',
    name: {
      en: 'Dengue-like Viral Fever',
      hi: 'डेंगू जैसा बुखार (मच्छर जनित)',
      kn: 'ಡೆಂಗ್ಯೂ ತರಹದ ಜ್ವರ'
    },
    category: 'vector_borne',
    severity: 'moderate',
    primarySymptoms: ['fever', 'headache', 'joint_swelling_pain', 'skin_rash'],
    secondarySymptoms: ['vomiting', 'fatigue'],
    summary: {
      en: 'High fever characterized by retro-orbital (behind eye) headache, severe joint/bone aches, and sometimes a rash.',
      hi: 'आंखों के पीछे दर्द, जोड़ों में असहनीय दर्द और त्वचा पर लाल दानों वाला तेज बुखार।',
      kn: 'ಕಣ್ಣಿನ ಹಿಂಭಾಗದಲ್ಲಿ ನೋವು, ತೀವ್ರ ಕೀಲು ನೋವು ಮತ್ತು ಚರ್ಮದ ಮೇಲೆ ಕೆಂಪು ಗುಳ್ಳೆಗಳಿರುವ ಜ್ವರ.'
    },
    whatToDo: {
      en: [
        'Visit your local PHC or dispensary for a simple blood platelet test.',
        'Drink lots of fluids: ORS, coconut water, fresh fruit juices, dal soup.',
        'Use mosquito nets to avoid spreading to other family members.'
      ],
      hi: [
        'नजदीकी सरकारी अस्पताल (PHC) जाकर प्लेटलेट की जांच कराएं।',
        'खूब पानी, ओआरएस, नारियल पानी और दाल का पानी पिएं।',
        'मच्छरदानी लगाकर सोएं ताकि घर के अन्य लोगों को न फैले।'
      ],
      kn: [
        'ಹತ್ತಿರದ ಸರ್ಕಾರಿ ಆಸ್ಪತ್ರೆಗೆ ಭೇಟಿ ನೀಡಿ ಪ್ಲೇಟ್‌ಲೆಟ್ ಪರೀಕ್ಷೆ ಮಾಡಿಸಿಕೊಳ್ಳಿ.',
        'ಸಾಕಷ್ಟು ದ್ರವಾಹಾರ ಸೇವಿಸಿ: ಒಆರ್‌ಎಸ್, ಎಳನೀರು, ಹಣ್ಣಿನ ರಸ, ಬೇಳೆ ಸಾರು.',
        'ಸೊಳ್ಳೆ ಪರದೆ ಬಳಸಿ ಮಲಗಿ.'
      ]
    },
    medicines: {
      en: [
        'ONLY Paracetamol for fever.',
        'STRICT WARNING: NEVER take Ibuprofen, Diclofenac, or Aspirin, as they increase bleeding risks!'
      ],
      hi: [
        'बुखार के लिए केवल पैरासिटामोल लें।',
        'सख्त चेतावनी: ब्रूफेन, डिक्लोफेनेक या एस्पिरिन जैसी दर्द की दवाएं कभी न लें, इनसे खून बहने का खतरा होता है!'
      ],
      kn: [
        'ಜ್ವರಕ್ಕೆ ಕೇವಲ ಪ್ಯಾರಾಸಿಟಮಾಲ್ ಮಾತ್ರ ತೆಗೆದುಕೊಳ್ಳಿ.',
        'ಕಟ್ಟುನಿಟ್ಟಿನ ಎಚ್ಚರಿಕೆ: ಐಬುಪ್ರೊಫೇನ್ ಅಥವಾ ಆಸ್ಪಿರಿನ್ ತೆಗೆದುಕೊಳ್ಳಬೇಡಿ, ಇದು ರಕ್ತಸ್ರಾವದ ಅಪಾಯ ಹೆಚ್ಚಿಸುತ್ತದೆ!'
      ]
    },
    precautions: {
      dos: {
        en: ['Rest completely', 'Drink ORS regularly', 'Get blood platelets tested'],
        hi: ['पूरी तरह आराम करें', 'लगातार ओआरएस पीते रहें', 'ब्लड टेस्ट कराएं'],
        kn: ['ಸಂಪೂರ್ಣ ವಿಶ್ರಾಂತಿ', 'ಒಆರ್‌ಎಸ್ ಸೇವನೆ', 'ರಕ್ತ ಪರೀಕ್ಷೆ ಮಾಡಿಸಿ']
      },
      donts: {
        en: ['DO NOT take NSAID painkillers (Brufen/Combiflam)', 'Do not ignore bleeding signs'],
        hi: ['ब्रूफेन या कॉम्बीफ्लेम दर्द निवारक न लें', 'खून बहने के किसी लक्षण को अनदेखा न करें'],
        kn: ['ಕಾಂಬಿಫ್ಲಾಮ್ ಅಥವಾ ಬ್ರೂಫೆನ್ ತೆಗೆದುಕೊಳ್ಳಬೇಡಿ', 'ರಕ್ತಸ್ರಾವದ ಲಕ್ಷಣ ನಿರ್ಲಕ್ಷಿಸಬೇಡಿ']
      }
    },
    whenToSeeDoctor: {
      en: ['Any bleeding from gums, nose, vomit, or black stools', 'Persistent vomiting or inability to keep liquids down', 'Severe stomach pain or cold clammy skin'],
      hi: ['मसूड़ों या नाक से खून आना, उल्टी में खून या काला मल', 'लगातार उल्टियां होना और पानी भी न पचना', 'पेट में बहुत तेज दर्द या हाथ-पैर ठंडे पड़ना'],
      kn: ['ವಸಡು ಅಥವಾ ಮೂಗಿನಿಂದ ರಕ್ತಸ್ರಾವ, ಕಪ್ಪು ಮಲ', 'ನಿರಂತರ ವಾಂತಿ ಮತ್ತು ನೀರು ಕುಡಿಯಲಾಗದ ಸ್ಥಿತಿ', 'ಹೊಟ್ಟೆಯಲ್ಲಿ ಅತಿಯಾದ ನೋವು']
    }
  },

  // 4. Malaria-like fever
  {
    id: 'malaria_like',
    name: {
      en: 'Malaria-like Fever (Chills & Rigors)',
      hi: 'मलेरिया जैसा बुखार (कंपकंपी के साथ)',
      kn: 'ಮಲೇರಿಯಾ ತರಹದ ಜ್ವರ (ಚಳಿ ಜ್ವರ)'
    },
    category: 'vector_borne',
    severity: 'moderate',
    primarySymptoms: ['fever', 'headache', 'fatigue'],
    secondarySymptoms: ['vomiting'],
    summary: {
      en: 'Fever that comes in periodic cycles accompanied by teeth-chattering chills, shivering, and heavy sweating when fever drops.',
      hi: 'कंपकंपी और दांत किटकिटाने वाली ठंड के साथ आने वाला बुखार, जिसके उतरने पर पसीना आता है।',
      kn: 'ವಿಪರೀತ ಚಳಿ, ನಡುಕದೊಂದಿಗೆ ಬರುವ ಜ್ವರ ಮತ್ತು ಜ್ವರ ಇಳಿಯುವಾಗ ಬೆವರುವುದು.'
    },
    whatToDo: {
      en: [
        'Visit the nearest PHC or sub-centre for a free malaria rapid test or blood slide.',
        'Drink boiled and cooled water.',
        'Cover with warm blankets during the shivering stage.'
      ],
      hi: [
        'तुरंत नजदीकी प्राथमिक स्वास्थ्य केंद्र पर जाकर मुफ्त मलेरिया जांच कराएं।',
        'उबला हुआ गुनगुना पानी पिएं।',
        'कंपकंपी होने पर गर्म कंबल ओढ़ें।'
      ],
      kn: [
        'ಪ್ರಾಥಮಿಕ ಆರೋಗ್ಯ ಕೇಂದ್ರಕ್ಕೆ ಭೇಟಿ ನೀಡಿ ಉಚಿತ ಮಲೇರಿಯಾ ಪರೀಕ್ಷೆ ಮಾಡಿಸಿ.',
        'ಕಾಯಿಸಿ ಆರಿಸಿದ ನೀರು ಕುಡಿಯಿರಿ.',
        'ಚಳಿ ಇರುವಾಗ ಹೊದಿಕೆ ಹೊದ್ದು ಮಲಗಿ.'
      ]
    },
    medicines: {
      en: [
        'Paracetamol for fever.',
        'Malaria requires specific prescription antimalarials from the PHC based on the test result.'
      ],
      hi: [
        'बुखार कम करने के लिए पैरासिटामोल।',
        'मलेरिया की विशेष दवा सरकारी अस्पताल में जांच के बाद मुफ्त मिलती है।'
      ],
      kn: [
        'ಜ್ವರಕ್ಕೆ ಪ್ಯಾರಾಸಿಟಮಾಲ್.',
        'ಪರೀಕ್ಷಾ ವರದಿಯ ನಂತರ ವೈದ್ಯರು ನೀಡುವ ಮಲೇರಿಯಾ ಔಷಧಿಯನ್ನು ಮಾತ್ರ ಸೇವಿಸಬೇಕು.'
      ]
    },
    precautions: {
      dos: {
        en: ['Sleep under insecticide-treated bed nets', 'Empty stagnant water around your home', 'Complete the full medicine course if confirmed'],
        hi: ['मच्छरदानी लगाकर सोएं', 'घर के आसपास जमा पानी खाली करें', 'दवा का पूरा कोर्स खत्म करें'],
        kn: ['ಸೊಳ್ಳೆ ಪರದೆ ಬಳಸಿ', 'ಮನೆಯ ಸುತ್ತ ನೀರು ನಿಲ್ಲದಂತೆ ನೋಡಿಕೊಳ್ಳಿ', 'ಔಷಧದ ಕೋರ್ಸ್ ಪೂರ್ಣಗೊಳಿಸಿ']
      },
      donts: {
        en: ['Do not stop medication halfway even if fever stops', 'Do not delay testing'],
        hi: ['बुखार रुकने पर भी दवा बीच में न छोड़ें', 'जांच कराने में देरी न करें'],
        kn: ['ಜ್ವರ ಕಡಿಮೆಯಾದರೂ ಔಷಧ ನಿಲ್ಲಿಸಬೇಡಿ', 'ಪರೀಕ್ಷೆ ವಿಳಂಬ ಮಾಡಬೇಡಿ']
      }
    },
    whenToSeeDoctor: {
      en: ['Urine turns dark brown or black', 'Confusion, delirium, or excessive sleepiness', 'Persistent vomiting preventing oral medications'],
      hi: ['पेशाब का रंग गहरा काला या भूरा हो जाए', 'बेहोशी या बहकी-बहकी बातें करना', 'लगातार उल्टियां होना'],
      kn: ['ಮೂತ್ರ ಗಾಢ ಕಪ್ಪು ಬಣ್ಣಕ್ಕೆ ತಿರುಗಿದರೆ', 'ಪ್ರಜ್ಞೆ ತಪ್ಪುವುದು ಅಥವಾ ಗೊಂದಲ', 'ನಿರಂತರ ವಾಂತಿ']
    }
  },

  // 5. Acute Gastroenteritis / Diarrhea
  {
    id: 'gastroenteritis',
    name: {
      en: 'Acute Gastroenteritis / Diarrhea',
      hi: 'दस्त और पेचिश (पेट खराब)',
      kn: 'ತೀವ್ರ ಅತಿಸಾರ / ನೀರು ಭೇದಿ'
    },
    category: 'digestive',
    severity: 'moderate',
    primarySymptoms: ['loose_motions', 'stomach_pain'],
    secondarySymptoms: ['vomiting', 'fever', 'fatigue'],
    summary: {
      en: 'Infection of the gut causing frequent watery stools, stomach cramps, and risk of quick dehydration.',
      hi: 'आंतों का संक्रमण जिससे बार-बार पतले दस्त, मरोड़ और शरीर में पानी की कमी हो सकती है।',
      kn: 'ಹೊಟ್ಟೆಯ ಸೋಂಕು, ಇದರಿಂದ ನೀರು ಭೇದಿ, ಹೊಟ್ಟೆ ಸೆಳೆತ ಮತ್ತು ನಿರ್ಜಲೀಕರಣ ಉಂಟಾಗುತ್ತದೆ.'
    },
    whatToDo: {
      en: [
        'Mix 1 packet of ORS in 1 liter of clean drinking water; sip after every loose stool.',
        'Drink rice water (kanji), tender coconut water, or salted buttermilk (chaas).',
        'Eat light, easily digestible food: khichdi, curd rice, boiled bananas.'
      ],
      hi: [
        '1 लीटर साफ पानी में 1 पैकेट ओआरएस (ORS) घोलें और हर दस्त के बाद थोड़ा-थोड़ा पिएं।',
        'चावल का मांड, छाछ, नारियल पानी और नींबू-पानी पिएं।',
        'हल्का खाना खाएं: मूंग दाल की खिचड़ी, दही-चावल, केला।'
      ],
      kn: [
        '1 ಲೀಟರ್ ಶುದ್ಧ ನೀರಿನಲ್ಲಿ 1 ಪ್ಯಾಕೆಟ್ ಓಆರ್‌ಎಸ್ ಬೆರೆಸಿ, ಪ್ರತಿ ಭೇದಿಯ ನಂತರ ಕುಡಿಯಿರಿ.',
        'ಗಂಜಿ ನೀರು, ಎಳನೀರು, ಉಪ್ಪು ಬೆರೆಸಿದ ಮಜ್ಜಿಗೆ ಕುಡಿಯಿರಿ.',
        'ಹಗುರವಾದ ಆಹಾರ ಸೇವಿಸಿ: ಕಿಚಡಿ, ಮೊಸರನ್ನ, ಬಾಳೆಹಣ್ಣು.'
      ]
    },
    medicines: {
      en: [
        'ORS (Oral Rehydration Solution) is the primary life-saving medicine.',
        'Zinc tablets (20mg daily for 14 days, especially vital for children under 5).',
        'WARNING: Avoid anti-motility drugs (like loperamide) without medical guidance.'
      ],
      hi: [
        'ओआरएस (ORS) सबसे जरूरी और जीवनरक्षक घोल है।',
        'जिंक की गोली (विशेषकर 5 साल से छोटे बच्चों के लिए 14 दिन तक)।',
        'चेतावनी: बिना डॉक्टर की सलाह के दस्त रोकने की गोलियां (लोपेरामाइड) न लें।'
      ],
      kn: [
        'ಒಆರ್‌ಎಸ್ (ORS) ಜೀವ ರಕ್ಷಕ ದ್ರಾವಣ.',
        'ಜಿಂಕ್ ಮಾತ್ರೆಗಳು (ವಿಶೇಷವಾಗಿ 5 ವರ್ಷದೊಳಗಿನ ಮಕ್ಕಳಿಗೆ 14 ದಿನಗಳು).',
        'ಎಚ್ಚರಿಕೆ: ವೈದ್ಯರ ಸಲಹೆಯಿಲ್ಲದೆ ಭೇದಿ ತಡೆಯುವ ಔಷಧ ತೆಗೆದುಕೊಳ್ಳಬೇಡಿ.'
      ]
    },
    precautions: {
      dos: {
        en: ['Wash hands with soap before eating and after toilet', 'Drink boiled water', 'Keep food covered'],
        hi: ['खाने से पहले और शौच के बाद साबुन से हाथ धोएं', 'उबला पानी पिएं', 'खाना ढंक कर रखें'],
        kn: ['ಊಟಕ್ಕೆ ಮುನ್ನ ಮತ್ತು ಶೌಚದ ನಂತರ ಸಾಬೂನಿನಿಂದ ಕೈ ತೊಳೆಯಿರಿ', 'ಕಾಯಿಸಿದ ನೀರು ಕುಡಿಯಿರಿ', 'ಆಹಾರ ಮುಚ್ಚಿಡಿ']
      },
      donts: {
        en: ['Do not stop drinking fluids', 'Avoid spicy, oily, or raw street food', 'Do not fast completely'],
        hi: ['पानी और तरल पदार्थ पीना बंद न करें', 'मसालेदार, तला हुआ या खुला खाना न खाएं', 'भूखे न रहें'],
        kn: ['ದ್ರವಾಹಾರ ನಿಲ್ಲಿಸಬೇಡಿ', 'ಖಾರ, ಎಣ್ಣೆಯುಕ್ತ ಆಹಾರ ತ್ಯಜಿಸಿ', 'ಉಪವಾಸ ಮಾಡಬೇಡಿ']
      }
    },
    whenToSeeDoctor: {
      en: ['Severe dehydration: sunken eyes, no urine for 6 hours, dry tongue', 'Blood or mucus in stools (dysentery)', 'Unable to keep any liquids down due to vomiting'],
      hi: ['पानी की गंभीर कमी: धंसी हुई आंखें, 6 घंटे से पेशाब न आना, सूखा मुंह', 'मल में खून या आंव आना', 'उल्टी के कारण पानी भी न पचना'],
      kn: ['ತೀವ್ರ ನಿರ್ಜಲೀಕರಣ: ಕಣ್ಣು ಗುಳಿಕೆ ಬೀಳುವುದು, 6 ಗಂಟೆ ಮೂತ್ರ ಬಾರದಿರುವುದು', 'ಮಲದಲ್ಲಿ ರಕ್ತ ಅಥವಾ ಲೋಳೆ', 'ನೀರು ಕುಡಿಯಲು ಸಾಧ್ಯವಾಗದಿರುವುದು']
    }
  },

  // 6. Food Poisoning
  {
    id: 'food_poisoning',
    name: {
      en: 'Food Poisoning',
      hi: 'फूड पॉइजनिंग (दूषित भोजन)',
      kn: 'ವಿಷಾಹಾರ / ಫುಡ್ ಪಾಯಿಸನಿಂಗ್'
    },
    category: 'digestive',
    severity: 'moderate',
    primarySymptoms: ['vomiting', 'stomach_pain', 'loose_motions'],
    secondarySymptoms: ['fever', 'fatigue'],
    summary: {
      en: 'Sudden onset of vomiting, cramps, and diarrhea within hours of eating contaminated food.',
      hi: 'बासी या दूषित खाना खाने के कुछ घंटों बाद अचानक उल्टी, दस्त और पेट में मरोड़।',
      kn: 'ಕಲುಷಿತ ಆಹಾರ ಸೇವಿಸಿದ ಕೆಲವೇ ಗಂಟೆಗಳಲ್ಲಿ ಪ್ರಾರಂಭವಾಗುವ ವಾಂತಿ, ಭೇದಿ ಮತ್ತು ಹೊಟ್ಟೆ ನೋವು.'
    },
    whatToDo: {
      en: [
        'Rest your stomach for 1-2 hours after vomiting, then sip small amounts of ORS or water.',
        'Gradually introduce bland foods like toast, rice, or bananas.',
        'Rest and stay hydrated.'
      ],
      hi: [
        'उल्टी होने के 1-2 घंटे बाद थोड़ा-थोड़ा ओआरएस या पानी घूंट-घूंट पिएं।',
        'पेट शांत होने पर खिचड़ी, दही या केला खाएं।',
        'आराम करें और शरीर में पानी की कमी न होने दें।'
      ],
      kn: [
        'ವಾಂತಿಯ ನಂತರ ಸ್ವಲ್ಪ ಹೊತ್ತು ಹೊಟ್ಟೆಗೆ ವಿಶ್ರಾಂತಿ ನೀಡಿ, ನಂತರ ಸ್ವಲ್ಪ ಸ್ವಲ್ಪವೇ ಓಆರ್‌ಎಸ್ ಕುಡಿಯಿರಿ.',
        'ಕ್ರಮೇಣ ಹಗುರವಾದ ಆಹಾರ (ಅನ್ನ, ಬಾಳೆಹಣ್ಣು) ಸೇವಿಸಿ.',
        'ವಿಶ್ರಾಂತಿ ಪಡೆಯಿರಿ.'
      ]
    },
    medicines: {
      en: [
        'ORS packets dissolved in safe water.',
        'Paracetamol if mild fever accompanies cramps.'
      ],
      hi: [
        'साफ पानी में ओआरएस का घोल।',
        'हल्के बुखार या दर्द के लिए पैरासिटामोल।'
      ],
      kn: [
        'ಓಆರ್‌ಎಸ್ ದ್ರಾವಣ.',
        'ಜ್ವರವಿದ್ದರೆ ಪ್ಯಾರಾಸಿಟಮಾಲ್.'
      ]
    },
    precautions: {
      dos: {
        en: ['Discard suspicious food items', 'Boil drinking water', 'Rest indoors'],
        hi: ['खराब खाने को तुरंत फेंकें', 'पीने का पानी उबालकर पिएं', 'आराम करें'],
        kn: ['ಹಳಸಿದ ಆಹಾರ ಎಸೆಯಿರಿ', 'ಕಾಯಿಸಿದ ನೀರು ಕುಡಿಯಿರಿ', 'ವಿಶ್ರಾಂತಿ']
      },
      donts: {
        en: ['Do not drink dairy milk or coffee during acute illness', 'Avoid heavy fried foods'],
        hi: ['दूध, चाय या कॉफी न पिएं', 'तला-भुना खाना न खाएं'],
        kn: ['ಹಾಲು, ಚಹಾ ಕುಡಿಯಬೇಡಿ', 'ಎಣ್ಣೆಯುಕ್ತ ಆಹಾರ ಬೇಡ']
      }
    },
    whenToSeeDoctor: {
      en: ['High fever (>102 F) with vomiting', 'Stools have blood', 'Symptoms persist beyond 48 hours'],
      hi: ['तेज बुखार (102 F से ज्यादा)', 'मल में खून आना', '2 दिन बाद भी उल्टी-दस्त न रुकना'],
      kn: ['ಅಧಿಕ ಜ್ವರ', 'ಮಲದಲ್ಲಿ ರಕ್ತ', '48 ಗಂಟೆಗಳ ನಂತರವೂ ಕಡಿಮೆ ಆಗದಿದ್ದರೆ']
    }
  },

  // 7. Acidity / GERD
  {
    id: 'acidity_gerd',
    name: {
      en: 'Acidity & Heartburn (Acid Reflux)',
      hi: 'एसिडिटी और सीने में जलन',
      kn: 'ಎದೆಯುರಿ ಮತ್ತು ಗ್ಯಾಸ್ಟ್ರಿಕ್'
    },
    category: 'digestive',
    severity: 'mild',
    primarySymptoms: ['severe_acidity', 'stomach_pain'],
    secondarySymptoms: ['headache'],
    summary: {
      en: 'Burning sensation rising from upper stomach to chest or throat, often aggravated by oily foods or empty stomach.',
      hi: 'पेट से छाती और गले तक उठने वाली जलन, खट्टी डकारें और पेट में भारीपन।',
      kn: 'ಹೊಟ್ಟೆಯಿಂದ ಎದೆಗೆ ಏರುವ ಉರಿ, ಹುಳಿ ತೇಗು ಮತ್ತು ಹೊಟ್ಟೆ ಉಬ್ಬರ.'
    },
    whatToDo: {
      en: [
        'Sip cold milk, coconut water, or fresh water.',
        'Eat smaller meals at regular intervals; do not stay empty stomach for long hours.',
        'Keep upper body slightly elevated when lying down.'
      ],
      hi: [
        'ठंडा दूध, नारियल पानी या सामान्य पानी पिएं।',
        'लंबे समय तक भूखे न रहें; थोड़ा-थोड़ा खाना समय पर खाएं।',
        'सोते समय सिर को थोड़ा ऊंचा रखें।'
      ],
      kn: [
        'ತಣ್ಣನೆಯ ಹಾಲು, ಎಳನೀರು ಅಥವಾ ನೀರು ಕುಡಿಯಿರಿ.',
        'ದೀರ್ಘಕಾಲ ಉಪವಾಸವಿರಬೇಡಿ; ಸಮಯಕ್ಕೆ ಸರಿಯಾಗಿ ಊಟ ಮಾಡಿ.',
        'ಮಲಗುವಾಗ ತಲೆ ಸ್ವಲ್ಪ ಎತ್ತರದಲ್ಲಿರಲಿ.'
      ]
    },
    medicines: {
      en: [
        'Antacid liquid (aluminum hydroxide/magnesium hydroxide) or chewable antacid tablets for fast relief.',
        'Pantoprazole or Omeprazole (take 30 mins before morning breakfast if prescribed).'
      ],
      hi: [
        'एंटासिड सिरप (जैसे डाइजीन या जेलुसिल) या चबाने वाली एंटासिड गोली।',
        'पेंटोप्रोजोल या ओमेप्राजोल (सुबह खाली पेट)।'
      ],
      kn: [
        'ಆಂಟಾಸಿಡ್ ಸಿರಪ್ ಅಥವಾ ಜಗಿಯುವ ಮಾತ್ರೆಗಳು ತಕ್ಷಣದ ಪರಿಹಾರಕ್ಕೆ.',
        'ಪ್ಯಾಂಟೊಪ್ರಜೋಲ್ (ಬೆಳಿಗ್ಗೆ ಖಾಲಿ ಹೊಟ್ಟೆಯಲ್ಲಿ).'
      ]
    },
    precautions: {
      dos: {
        en: ['Walk lightly after eating', 'Eat dinner 2 hours before sleeping', 'Drink plenty of water'],
        hi: ['खाने के बाद थोड़ा टहलें', 'सोने से 2 घंटे पहले रात का खाना खाएं', 'पर्याप्त पानी पिएं'],
        kn: ['ಊಟದ ನಂತರ ಸ್ವಲ್ಪ ನಡೆಯಿರಿ', 'ಮಲಗುವ 2 ಗಂಟೆ ಮುಂಚೆ ಊಟ ಮಾಡಿ', 'ಸಾಕಷ್ಟು ನೀರು ಕುಡಿಯಿರಿ']
      },
      donts: {
        en: ['Avoid tobacco, bidi, and alcohol completely', 'Cut down on excess chilies, fried snacks, and strong tea'],
        hi: ['तंबाकू, बीड़ी और शराब से पूरी तरह बचें', 'ज्यादा मिर्च-मसाला और बार-बार चाय पीना बंद करें'],
        kn: ['ತಂಬಾಕು, ಬೀಡಿ, ಮದ್ಯಪಾನ ಸಂಪೂರ್ಣ ತ್ಯಜಿಸಿ', 'ಅತಿಯಾದ ಖಾರ ಮತ್ತು ಎಣ್ಣೆ ಪದಾರ್ಥ ಬೇಡ']
      }
    },
    whenToSeeDoctor: {
      en: ['Chest pain that radiates to left arm, neck, or jaw (EMERGENCY - Rule out Heart Attack!)', 'Difficulty or pain while swallowing food', 'Vomiting blood or black coffee-ground material'],
      hi: ['सीने का दर्द जो बाएं हाथ या जबड़े तक फैले (आपातकाल - दिल के दौरे की तुरंत जांच कराएं!)', 'खाना निगलने में दर्द या रुकावट होना', 'खून की उल्टी या काला मल'],
      kn: ['ಎದೆ ನೋವು ಎಡಗೈ ಅಥವಾ ದವಡೆಗೆ ಹರಡಿದರೆ (ತುರ್ತು - ಹೃದಯಾಘಾತದ ತಪಾಸಣೆ ಅಗತ್ಯ!)', 'ಆಹಾರ ನುಂಗಲು ಕಷ್ಟವಾದರೆ', 'ರಕ್ತದ ವಾಂತಿ']
    }
  },

  // 8. Tension Headache
  {
    id: 'tension_headache',
    name: {
      en: 'Tension Headache',
      hi: 'तनाव का सिरदर्द',
      kn: 'ಒತ್ತಡದ ತಲೆನೋವು'
    },
    category: 'neurological',
    severity: 'mild',
    primarySymptoms: ['headache', 'fatigue'],
    secondarySymptoms: ['back_pain'],
    summary: {
      en: 'A dull, aching band-like pressure around the forehead or back of the head, often triggered by stress, dehydration, or eye strain.',
      hi: 'माथे पर दोनों तरफ दबाव या भारीपन जैसा सिरदर्द, जो तनाव, धूप या पानी की कमी से होता है।',
      kn: 'ಹಣೆ ಅಥವಾ ತಲೆಯ ಸುತ್ತ ಪಟ್ಟಿಯಂತೆ ಬಿಗಿಯಾದ ಮಂದ ತಲೆನೋವು, ಆಯಾಸ ಅಥವಾ ಬಿಸಿಲಿನಿಂದ ಬರುವುದು.'
    },
    whatToDo: {
      en: [
        'Drink 2 full glasses of water.',
        'Rest in a quiet, cool, dimly lit room for 30 minutes.',
        'Gently massage neck and shoulder muscles.'
      ],
      hi: [
        '2 गिलास ठंडा या सामान्य पानी पिएं।',
        'शांत और हवादार कमरे में 30 मिनट आंखें बंद कर आराम करें।',
        'गर्दन और माथे की हल्की मालिश करें।'
      ],
      kn: [
        '2 ಲೋಟ ನೀರು ಕುಡಿಯಿರಿ.',
        'ಶಾಂತವಾದ ಕೋಣೆಯಲ್ಲಿ 30 ನಿಮಿಷ ಕಣ್ಣು ಮುಚ್ಚಿ ವಿಶ್ರಾಂತಿ ಪಡೆಯಿರಿ.',
        'ಕುತ್ತಿಗೆ ಮತ್ತು ಭುಜದ ಸ್ನಾಯುಗಳನ್ನು ನಿಧಾನವಾಗಿ ಮಸಾಜ್ ಮಾಡಿ.'
      ]
    },
    medicines: {
      en: [
        'Paracetamol (500mg) taken with a meal (adults only).',
        'Avoid frequent daily painkiller use to prevent rebound headaches.'
      ],
      hi: [
        'हल्के दर्द के लिए पैरासिटामोल (500mg) खाना खाने के बाद।',
        'रोज-रोज दर्द की गोली खाने से बचें।'
      ],
      kn: [
        'ಪ್ಯಾರಾಸಿಟಮಾಲ್ (500mg) ಊಟದ ನಂತರ.',
        'ದಿನವೂ ನೋವು ನಿವಾರಕ ಮಾತ್ರೆ ತೆಗೆದುಕೊಳ್ಳಬೇಡಿ.'
      ]
    },
    precautions: {
      dos: {
        en: ['Sleep 7-8 hours regularly', 'Stay well hydrated during hot weather', 'Get eyes checked if working with close vision'],
        hi: ['रोजाना 7-8 घंटे सोएं', 'धूप में सिर ढक कर निकलें और पानी पिएं', 'आंखों की जांच कराएं'],
        kn: ['ದಿನಕ್ಕೆ 7-8 ಗಂಟೆ ನಿದ್ರೆ ಮಾಡಿ', 'ಸಾಕಷ್ಟು ನೀರು ಕುಡಿಯಿರಿ', 'ಕಣ್ಣಿನ ಪರೀಕ್ಷೆ ಮಾಡಿಸಿಕೊಳ್ಳಿ']
      },
      donts: {
        en: ['Do not skip meals', 'Avoid excess tea/coffee', 'Do not stare at phone screens in dark'],
        hi: ['भूखे पेट न रहें', 'ज्यादा चाय-कॉफी न पिएं', 'अंधेरे में फोन न देखें'],
        kn: ['ಊಟ ತಪ್ಪಿಸಬೇಡಿ', 'ಹೆಚ್ಚು ಚಹಾ-ಕಾಫಿ ಕುಡಿಯಬೇಡಿ', 'ಕತ್ತಲಲ್ಲಿ ಮೊಬೈಲ್ ನೋಡಬೇಡಿ']
      }
    },
    whenToSeeDoctor: {
      en: ['Sudden explosive "thunderclap" headache', 'Headache with fever, stiff neck, or vomiting', 'Headache with weakness in face, arms, or speech change'],
      hi: ['अचानक बिजली के झटके जैसा असहनीय सिरदर्द', 'सिरदर्द के साथ गर्दन में अकड़न या तेज बुखार', 'चेहरा टेढ़ा होना या बोलने में लड़खड़ाहट'],
      kn: ['ಸಿಡಿಲಿನಂತಹ ಹಠಾತ್ ತೀವ್ರ ತಲೆನೋವು', 'ತಲೆನೋವಿನೊಂದಿಗೆ ಕುತ್ತಿಗೆ ಬಿಗಿತ ಅಥವಾ ಜ್ವರ', 'ಮುಖ ಅಥವಾ ಕೈಗಳಲ್ಲಿ ದೌರ್ಬಲ್ಯ']
    }
  },

  // 9. Migraine
  {
    id: 'migraine',
    name: {
      en: 'Migraine Headache',
      hi: 'माइग्रेन (आधे सिर का दर्द)',
      kn: 'ಮೈಗ್ರೇನ್ (ಅರ್ಧ ತಲೆನೋವು)'
    },
    category: 'neurological',
    severity: 'moderate',
    primarySymptoms: ['headache', 'vomiting', 'dizziness'],
    secondarySymptoms: ['fatigue'],
    summary: {
      en: 'Intense throbbing pain, usually on one side of the head, often accompanied by nausea, sensitivity to bright light and loud sounds.',
      hi: 'सिर के एक तरफ तेज टीस मारने वाला दर्द, जिसके साथ जी मिचलाना, उल्टी और तेज रोशनी से चिढ़ होती है।',
      kn: 'ತಲೆಯ ಒಂದು ಬದಿಯಲ್ಲಿ ತೀವ್ರ ಚುಚ್ಚುವಂತಹ ನೋವು, ವಾಕರಿಕೆ ಮತ್ತು ಬೆಳಕು-ಶಬ್ದವನ್ನು ಸಹಿಸಲಾಗದಿರುವುದು.'
    },
    whatToDo: {
      en: [
        'Rest in a dark, quiet room with eyes closed.',
        'Apply a cool damp cloth to the forehead or temples.',
        'Drink plenty of fluids.'
      ],
      hi: [
        'अंधेरे और शांत कमरे में लेट जाएं।',
        'माथे पर ठंडे पानी की पट्टी रखें।',
        'पानी या नींबू पानी पिएं।'
      ],
      kn: [
        'ಕತ್ತಲೆ ಮತ್ತು ಶಾಂತ ಕೋಣೆಯಲ್ಲಿ ವಿಶ್ರಾಂತಿ ಪಡೆಯಿರಿ.',
        'ಹಣೆ ಮೇಲೆ ತಣ್ಣನೆಯ ಬಟ್ಟೆ ಇಡಿ.',
        'ಸಾಕಷ್ಟು ನೀರು ಕುಡಿಯಿರಿ.'
      ]
    },
    medicines: {
      en: [
        'Paracetamol (500mg-1000mg) at the first hint of an attack.',
        'Specific migraine tablets require doctor prescription at PHC.'
      ],
      hi: [
        'दर्द शुरू होते ही पैरासिटामोल लें।',
        'माइग्रेन की विशेष दवाएं डॉक्टर की सलाह से ही लें।'
      ],
      kn: [
        'ನೋವು ಪ್ರಾರಂಭವಾದ ತಕ್ಷಣ ಪ್ಯಾರಾಸಿಟಮಾಲ್ ಸೇವಿಸಿ.',
        'ಮೈಗ್ರೇನ್‌ಗೆ ನಿರ್ದಿಷ್ಟ ಔಷಧವನ್ನು ವೈದ್ಯರ ಬಳಿ ಪಡೆಯಿರಿ.'
      ]
    },
    precautions: {
      dos: {
        en: ['Identify and avoid personal triggers (empty stomach, sun, lack of sleep)', 'Keep regular sleep hours'],
        hi: ['धूप, भूखे पेट रहने या कम सोने से बचें', 'समय पर सोने और जागने की आदत डालें'],
        kn: ['ಬಿಸಿಲು, ಹಸಿವು ಮತ್ತು ನಿದ್ರಾಹೀನತೆಯಿಂದ ದೂರವಿರಿ', 'ನಿಯಮಿತ ನಿದ್ರೆಯ ವೇಳಾಪಟ್ಟಿ']
      },
      donts: {
        en: ['Avoid skipping meals', 'Avoid harsh bright glare and direct loud speakers'],
        hi: ['भोजन न छोड़ें', 'तेज धूप और तेज लाउडस्पीकर के शोर से बचें'],
        kn: ['ಊಟ ಬಿಡಬೇಡಿ', 'ತೀವ್ರ ಬೆಳಕು ಮತ್ತು ಗದ್ದಲದಿಂದ ದೂರವಿರಿ']
      }
    },
    whenToSeeDoctor: {
      en: ['Attacks occur multiple times per week', 'Pain is accompanied by vision loss, weakness, or numbness', 'Headache changes in character or worsens drastically'],
      hi: ['हफ्ते में कई बार दौरा पड़े', 'आंखों के आगे अंधेरा छाना या हाथ-पैर सुन्न होना', 'दर्द अचानक बहुत ज्यादा बढ़ जाए'],
      kn: ['ವಾರದಲ್ಲಿ ಹಲವು ಬಾರಿ ಕಾಣಿಸಿಕೊಂಡರೆ', 'ದೃಷ್ಟಿ ಮಂದವಾಗುವುದು ಅಥವಾ ಕೈಕಾಲು ಮರಗಟ್ಟುವುದು', 'ನೋವು ತೀವ್ರವಾಗಿ ಹೆಚ್ಚಿದರೆ']
    }
  },

  // 10. Urinary Tract Infection (UTI)
  {
    id: 'uti',
    name: {
      en: 'Urinary Tract Infection (UTI)',
      hi: 'पेशाब का संक्रमण (यूटीआई)',
      kn: 'ಮೂತ್ರನಾಳದ ಸೋಂಕು (ಯುಟಿಐ)'
    },
    category: 'urinary',
    severity: 'moderate',
    primarySymptoms: ['burning_urination', 'stomach_pain'],
    secondarySymptoms: ['fever', 'fatigue'],
    summary: {
      en: 'Bacterial infection causing painful burning urination, frequent urge to pass small drops of urine, and lower pelvic pain.',
      hi: 'पेशाब करते समय तेज जलन, बार-बार पेशाब आने की इच्छा और पेड़ू (निचले पेट) में दर्द।',
      kn: 'ಮೂತ್ರ ಮಾಡುವಾಗ ತೀವ್ರ ಉರಿ, ಪದೇ ಪದೇ ಮೂತ್ರಕ್ಕೆ ಹೋಗಬೇಕೆನಿಸುವುದು ಮತ್ತು ಹೊಟ್ಟೆಯ ಕೆಳಭಾಗದಲ್ಲಿ ನೋವು.'
    },
    whatToDo: {
      en: [
        'Drink at least 3 to 4 liters of clean water throughout the day to flush bacteria.',
        'Drink tender coconut water and barley water.',
        'Do not hold urine; empty bladder as soon as you feel the urge.'
      ],
      hi: [
        'दिन भर में कम से कम 3 से 4 लीटर साफ पानी पिएं ताकि कीटाणु बाहर निकलें।',
        'नारियल पानी और जौ का पानी पिएं।',
        'पेशाब को कभी रोक कर न रखें; इच्छा होते ही तुरंत जाएं।'
      ],
      kn: [
        'ದಿನಕ್ಕೆ ಕನಿಷ್ಠ 3 ರಿಂದ 4 ಲೀಟರ್ ಶುದ್ಧ ನೀರು ಕುಡಿಯಿರಿ.',
        'ಎಳನೀರು ಮತ್ತು ಬಾರ್ಲಿ ನೀರು ಕುಡಿಯಿರಿ.',
        'ಮೂತ್ರವನ್ನು ತಡೆಹಿಡಿಯಬೇಡಿ.'
      ]
    },
    medicines: {
      en: [
        'Alkalizing solution / sodium bicarbonate in water to reduce burning (temporary relief).',
        'Paracetamol for lower pelvic ache or low fever.',
        'Antibiotics: Must visit the PHC for a simple urine test and appropriate antibiotic course.'
      ],
      hi: [
        'जलन कम करने के लिए सिट्रालका सिरप या एक गिलास पानी में आधा चम्मच मीठा सोडा (अस्थाई राहत)।',
        'दर्द के लिए पैरासिटामोल।',
        'एंटीबायोटिक: पीएचसी जाकर पेशाब की जांच कराएं और डॉक्टर द्वारा बताई सही दवा लें।'
      ],
      kn: [
        'ಉರಿ ಕಡಿಮೆ ಮಾಡಲು ಕ್ಷಾರೀಯ ದ್ರಾವಣ (ಅಥವಾ ಬಾರ್ಲಿ ನೀರು).',
        'ನೋವಿಗೆ ಪ್ಯಾರಾಸಿಟಮಾಲ್.',
        'ಸೂಕ್ತ ಆಂಟಿಬಯೋಟಿಕ್‌ಗಾಗಿ ಪಿಎಚ್‌ಸಿಗೆ ಭೇಟಿ ನೀಡಿ ಮೂತ್ರ ಪರೀಕ್ಷೆ ಮಾಡಿಸಿಕೊಳ್ಳಿ.'
      ]
    },
    precautions: {
      dos: {
        en: ['Wipe from front to back after using the toilet', 'Wear clean, dry cotton undergarments', 'Urinate after intercourse'],
        hi: ['शौच के बाद हमेशा आगे से पीछे की ओर धोएं', 'सूखे और साफ सूती कपड़े पहनें', 'सफाई का विशेष ध्यान रखें'],
        kn: ['ಶೌಚದ ನಂತರ ಸ್ವಚ್ಛತೆಗೆ ಆದ್ಯತೆ ನೀಡಿ', 'ಹತ್ತಿಯ ಒಳ ಉಡುಪುಗಳನ್ನು ಧರಿಸಿ', 'ಸಾಕಷ್ಟು ನೀರು ಕುಡಿಯಿರಿ']
      },
      donts: {
        en: ['Do not hold urine for hours', 'Avoid harsh perfumed soaps in intimate areas', 'Do not leave wet clothes on'],
        hi: ['पेशाब रोक कर न रखें', 'गुप्त अंगों पर खुशबूदार साबुन न लगाएं', 'गीले कपड़े ज्यादा देर न पहनें'],
        kn: ['ಮೂತ್ರ ತಡೆಯಬೇಡಿ', 'ತೀವ್ರ ಪರಿಮಳದ ಸಾಬೂನು ಬಳಸಬೇಡಿ', 'ಒದ್ದೆ ಬಟ್ಟೆ ಧರಿಸಬೇಡಿ']
      }
    },
    whenToSeeDoctor: {
      en: ['High fever with shaking chills and back/flank pain (indicates kidney spread)', 'Blood in urine', 'Pregnancy with any UTI symptom (risky for baby)'],
      hi: ['तेज बुखार, कंपकंपी और पीठ के निचले हिस्से में दर्द (गुर्दे में संक्रमण का संकेत)', 'पेशाब में खून आना', 'गर्भावस्था में पेशाब में जलन (तुरंत जांच जरूरी)'],
      kn: ['ಜ್ವರದೊಂದಿಗೆ ಬೆನ್ನು/ಮೂತ್ರಪಿಂಡದ ಭಾಗದಲ್ಲಿ ನೋವು', 'ಮೂತ್ರದಲ್ಲಿ ರಕ್ತ', 'ಗರ್ಭಿಣಿಯರಲ್ಲಿ ಯುಟಿಐ ಲಕ್ಷಣ (ಮಗುವಿಗೆ ಅಪಾಯ)']
    }
  },

  // 11. Skin Allergy / Urticaria
  {
    id: 'skin_allergy',
    name: {
      en: 'Skin Allergy / Urticaria (Hives)',
      hi: 'त्वचा की एलर्जी / पित्ती (चकत्ते)',
      kn: 'ಚರ್ಮದ ಅಲರ್ಜಿ / ದದ್ದುಗಳು'
    },
    category: 'skin',
    severity: 'mild',
    primarySymptoms: ['skin_rash'],
    secondarySymptoms: ['fatigue'],
    summary: {
      en: 'Itchy, raised red welts or patches on the skin, triggered by allergens, insect contact, medicines, or foods.',
      hi: 'त्वचा पर लाल, उभरे हुए खुजलीदार चकत्ते (पित्ती उछलना), जो किसी खाने, कीड़े या दवा से हो सकते हैं।',
      kn: 'ಚರ್ಮದ ಮೇಲೆ ತುರಿಕೆ ಉಂಟುಮಾಡುವ ಕೆಂಪು ದದ್ದುಗಳು ಅಥವಾ ಗಂದೆಗಳು.'
    },
    whatToDo: {
      en: [
        'Apply cool compresses or ice wrapped in a clean cloth to soothe the itch.',
        'Apply soothing calamine lotion over the itchy areas.',
        'Wear loose, soft cotton clothing.'
      ],
      hi: [
        'खुजली शांत करने के लिए ठंडे पानी की पट्टी या कपड़े में बर्फ लपेट कर लगाएं।',
        'कैलामाइन लोशन या नारियल का तेल लगाएं।',
        'ढीले और आरामदायक सूती कपड़े पहनें।'
      ],
      kn: [
        'ತುರಿಕೆ ಶಮನಕ್ಕೆ ತಣ್ಣೀರಿನ ಬಟ್ಟೆ ಇಡಿ.',
        'ಕ್ಯಾಲಮೈನ್ ಲೋಷನ್ ಅಥವಾ ತೆಂಗಿನ ಎಣ್ಣೆ ಹಚ್ಚಿ.',
        'ಸಡಿಲವಾದ ಹತ್ತಿ ಬಟ್ಟೆ ಧರಿಸಿ.'
      ]
    },
    medicines: {
      en: [
        'Cetirizine (10mg) for adults at night to relieve itching and hives.',
        'Calamine lotion applied topically.'
      ],
      hi: [
        'खुजली कम करने के लिए सिट्रिजीन (10mg) रात को सोने से पहले (वयस्कों के लिए)।',
        'कैलामाइन लोशन चकत्तों पर लगाएं।'
      ],
      kn: [
        'ತುರಿಕೆಗೆ ಸೆಟ್ರಿಜಿನ್ (10mg) ರಾತ್ರಿ ಮಲಗುವಾಗ (ದೊಡ್ಡವರಿಗೆ).',
        'ಕ್ಯಾಲಮೈನ್ ಲೋಷನ್ ಹಚ್ಚಿ.'
      ]
    },
    precautions: {
      dos: {
        en: ['Keep fingernails trimmed to avoid skin infection', 'Bathe with lukewarm or cool water with gentle soap'],
        hi: ['नाखून छोटे रखें ताकि खरोंच से घाव न बने', 'हल्के ठंडे पानी से नहाएं'],
        kn: ['ಉಗುರುಗಳನ್ನು ಕತ್ತರಿಸಿ', 'ಸಾಮಾನ್ಯ ನೀರಿನಲ್ಲಿ ಸ್ನಾನ ಮಾಡಿ']
      },
      donts: {
        en: ['Do not scratch vigorously', 'Do not use very hot water for bathing', 'Avoid suspected food allergens (peanuts, seafood, egg)'],
        hi: ['नाखूनों से जोर से न खरोंचें', 'बहुत गर्म पानी से न नहाएं', 'जिस खाने से एलर्जी का शक हो उसे न खाएं'],
        kn: ['ಉಗುರಿನಿಂದ ಕೆರೆಯಬೇಡಿ', 'ಬಿಸಿ ನೀರಿನ ಸ್ನಾನ ಬೇಡ', 'ಅಲರ್ಜಿ ಉಂಟುಮಾಡುವ ಆಹಾರ ತ್ಯಜಿಸಿ']
      }
    },
    whenToSeeDoctor: {
      en: ['Swelling of lips, tongue, face, or throat', 'Difficulty breathing or swallowing (EMERGENCY - Anaphylaxis!)', 'Dizziness or feeling faint'],
      hi: ['होंठ, जीभ, चेहरे या गले में सूजन आना', 'सांस लेने या निगलने में तकलीफ (आपातकाल - तुरंत अस्पताल जाएं!)', 'चक्कर आना या बेहोशी'],
      kn: ['ತುಟಿ, ನಾಲಿಗೆ ಅಥವಾ ಮುಖ ಊದಿಕೊಂಡರೆ', 'ಉಸಿರಾಟ ಕಷ್ಟವಾದರೆ (ತುರ್ತು ಚಿಕಿತ್ಸೆ ಅಗತ್ಯ!)', 'ತಲೆಸುತ್ತು']
    }
  },

  // 12. Fungal Infection / Ringworm
  {
    id: 'fungal_infection',
    name: {
      en: 'Fungal Infection / Ringworm (Dad / Khujli)',
      hi: 'दाद / फंगल इन्फेक्शन',
      kn: 'ದಾದ್ / ಶಿಲೀಂಧ್ರ ಸೋಂಕು'
    },
    category: 'skin',
    severity: 'mild',
    primarySymptoms: ['skin_rash'],
    secondarySymptoms: [],
    summary: {
      en: 'Circular, itchy red or scaly patches with raised edges, common in warm, sweaty skin folds (groin, armpits, toes).',
      hi: 'गोल छल्ले जैसा लाल, पपड़ीदार और खुजली वाला दाग (दाद), जो पसीने और नमी वाली जगहों पर फैलता है।',
      kn: 'ವೃತ್ತಾಕಾರದ ತುರಿಕೆ ಮತ್ತು ಕೆಂಪು ಕಲೆಯಿರುವ ಶಿಲೀಂಧ್ರ ಸೋಂಕು (ಉಂಗುರದ ಹುಳು), ಬೆವರಿನ ಜಾಗಗಳಲ್ಲಿ ಹೆಚ್ಚಾಗಿ ಬರುತ್ತದೆ.'
    },
    whatToDo: {
      en: [
        'Keep the infected area completely clean and dry.',
        'Wipe sweat frequently with a separate clean towel.',
        'Wash clothes, bedsheets, and towels in hot water and dry in direct sunlight.'
      ],
      hi: [
        'प्रभावित जगह को हमेशा साफ और सूखा रखें।',
        'पसीना पोंछने के लिए अलग साफ तौलिया इस्तेमाल करें।',
        'कपड़े और चादरें धूप में सुखाएं।'
      ],
      kn: [
        'ಸೋಂಕಿತ ಜಾಗವನ್ನು ಸ್ವಚ್ಛ ಮತ್ತು ಒಣಗಿಸಿ ಇಡಿ.',
        'ಪ್ರತ್ಯೇಕ ಟವಲ್ ಬಳಸಿ.',
        'ಬಟ್ಟೆಗಳನ್ನು ಬಿಸಿಲಿನಲ್ಲಿ ಚೆನ್ನಾಗಿ ಒಣಗಿಸಿ.'
      ]
    },
    medicines: {
      en: [
        'Clotrimazole or Miconazole 1% topical antifungal cream applied twice daily for 2-3 weeks.',
        'STRICT WARNING: NEVER apply steroid creams (like Betnovate, Quadriderm, Dermichem) as they make fungus grow aggressively and thin the skin!'
      ],
      hi: [
        'क्लोट्रिमाजोल (Clotrimazole 1%) फंगल रोधी क्रीम दिन में दो बार 2-3 हफ्ते तक लगाएं।',
        'सख्त चेतावनी: बेटनोवेट, क्वाड्रीडर्म जैसी स्टेरॉयड क्रीम कभी न लगाएं; इनसे दाद तेजी से फैलता है और चमड़ी पतली हो जाती है!'
      ],
      kn: [
        'ಕ್ಲೋಟ್ರಿಮಜೋಲ್ ಆಂಟಿಫಂಗಲ್ ಕ್ರೀಮ್ ದಿನಕ್ಕೆ ಎರಡು ಬಾರಿ 2-3 ವಾರಗಳವರೆಗೆ ಹಚ್ಚಿ.',
        'ಕಟ್ಟುನಿಟ್ಟಿನ ಎಚ್ಚರಿಕೆ: ಬೆಟ್ನೋವೇಟ್ ನಂತಹ ಸ್ಟೀರಾಯ್ಡ್ ಕ್ರೀಮ್ ಬಳಸಬೇಡಿ, ಇದು ಸೋಂಕನ್ನು ಉಲ್ಬಣಗೊಳಿಸುತ್ತದೆ!'
      ]
    },
    precautions: {
      dos: {
        en: ['Continue cream for 1 week even after rash disappears', 'Wear airy cotton clothing', 'Dust anti-fungal powder in skin folds'],
        hi: ['दाग ठीक होने के 1 हफ्ते बाद तक क्रीम लगाते रहें', 'हवादार सूती कपड़े पहनें'],
        kn: ['ಗುಳ್ಳೆ ವಾಸಿಯಾದ ಮೇಲೂ 1 ವಾರ ಕ್ರೀಮ್ ಹಚ್ಚುವುದನ್ನು ಮುಂದುವರಿಸಿ', 'ಹತ್ತಿ ಬಟ್ಟೆ ಧರಿಸಿ']
      },
      donts: {
        en: ['Do not share towels, soap, or clothes with family members', 'Do not use mixed steroid ointments'],
        hi: ['तौलिया, साबुन या कपड़े किसी के साथ साझा न करें', 'स्टेरॉयड क्रीम न लगाएं'],
        kn: ['ಟವಲ್, ಸಾಬೂನು ಹಂಚಿಕೊಳ್ಳಬೇಡಿ', 'ಮಿಶ್ರ ಸ್ಟೀರಾಯ್ಡ್ ಬಳಸಬೇಡಿ']
      }
    },
    whenToSeeDoctor: {
      en: ['Spreads over large portions of the body', 'Fails to improve after 2 weeks of antifungal cream', 'Develops yellow pus, severe swelling, or fever (bacterial superinfection)'],
      hi: ['पूरे शरीर में फैल जाए', '2 हफ्ते तक सही क्रीम लगाने पर भी ठीक न हो', 'मवाद पड़ जाए या सूजन और बुखार आ जाए'],
      kn: ['ದೇಹದ ಬಹುಭಾಗಕ್ಕೆ ಹರಡಿದರೆ', '2 ವಾರ ಕ್ರೀಮ್ ಹಚ್ಚಿದರೂ ಗುಣವಾಗದಿದ್ದರೆ', 'ಕೀವು ತುಂಬಿದರೆ ಅಥವಾ ಜ್ವರ ಬಂದರೆ']
    }
  },

  // 13. Minor Cut / Wound
  {
    id: 'minor_cut',
    name: {
      en: 'Minor Cut / Abrasion / Wound',
      hi: 'मामूली चोट / खरोंच / घाव',
      kn: 'ಸಣ್ಣ ಗಾಯ / ಸವೆತ'
    },
    category: 'injury',
    severity: 'mild',
    primarySymptoms: ['minor_cut_wound'],
    secondarySymptoms: ['skin_rash'],
    summary: {
      en: 'Superficial skin breakage or scrape with mild localized bleeding.',
      hi: 'त्वचा की ऊपरी परत का छिलना या कटना जिससे हल्का खून निकल रहा हो।',
      kn: 'ಚರ್ಮದ ಮೇಲ್ಮೈ ಸೀಳು ಅಥವಾ ಸವೆತ, ಸ್ವಲ್ಪ ರಕ್ತಸ್ರಾವ.'
    },
    whatToDo: {
      en: [
        'Wash the wound immediately under clean running water with soap for 5 minutes to remove dirt.',
        'Apply gentle, firm pressure with a clean cloth to stop bleeding.',
        'Apply povidone-iodine (Betadine) ointment and cover with a sterile band-aid.'
      ],
      hi: [
        'घाव को तुरंत नल के साफ पानी और साबुन से 5 मिनट तक धोएं ताकि मिट्टी और गंदगी निकल जाए।',
        'साफ कपड़े से हल्का दबाकर खून रोकें।',
        'बीटाडीन (Betadine) मलम लगाएं और साफ पट्टी बांधें।'
      ],
      kn: [
        'ಗಾಯವನ್ನು ತಕ್ಷಣ ಶುದ್ಧ ಹರಿಯುವ ನೀರಿನಲ್ಲಿ ಸಾಬೂನಿನಿಂದ 5 ನಿಮಿಷ ತೊಳೆದು ಧೂಳು ತೆಗೆಯಿರಿ.',
        'ಶುದ್ಧ ಬಟ್ಟೆಯಿಂದ ಒತ್ತಿ ಹಿಡಿದು ರಕ್ತ ನಿಲ್ಲಿಸಿ.',
        'ಬೀಟಾಡಿನ್ ಮುಲಾಮು ಹಚ್ಚಿ ಬ್ಯಾಂಡೇಜ್ ಹಾಕಿ.'
      ]
    },
    medicines: {
      en: [
        'Povidone-Iodine 5% or 10% topical ointment.',
        'Paracetamol (500mg) if there is mild throbbing pain.',
        'Tetanus Toxoid (TT) injection: Get one at the PHC if your last shot was more than 5 years ago!'
      ],
      hi: [
        'पोवीडोन आयोडीन (बीटाडीन) मलम।',
        'हल्के दर्द के लिए पैरासिटामोल।',
        'टिटनेस (TT) का टीका: यदि 5 साल से टीका नहीं लगा है, तो अस्पताल जाकर तुरंत लगवाएं!'
      ],
      kn: [
        'ಪೊವಿಡೋನ್-ಅಯೋಡಿನ್ (ಬೀಟಾಡಿನ್) ಮುಲಾಮು.',
        'ನೋವಿಗೆ ಪ್ಯಾರಾಸಿಟಮಾಲ್.',
        'ಟಿಟಾನಸ್ (TT) ಇಂಜೆಕ್ಷನ್: 5 ವರ್ಷಗಳಿಂದ ಪಡೆದಿಲ್ಲದಿದ್ದರೆ ತಕ್ಷಣ ಹಾಕಿಸಿಕೊಳ್ಳಿ!'
      ]
    },
    precautions: {
      dos: {
        en: ['Change bandage daily', 'Keep wound dry during bathing', 'Check tetanus vaccination history'],
        hi: ['पट्टी रोज बदलें', 'नहाते समय घाव को गीला न होने दें', 'टिटनेस का टीका जरूर लगवाएं'],
        kn: ['ಪ್ರತಿದಿನ ಬ್ಯಾಂಡೇಜ್ ಬದಲಾಯಿಸಿ', 'ಗಾಯ ಒಣಗಿರಲಿ', 'ಟಿಟಾನಸ್ ಚುಚ್ಚುಮದ್ದು ಪರಿಶೀಲಿಸಿ']
      },
      donts: {
        en: ['Do not apply cow dung, mud, ash, or turmeric paste to open wounds', 'Do not pick at scabs'],
        hi: ['घाव पर गोबर, मिट्टी, राख या चूना कभी न लगाएं (इससे टिटनेस और सड़न का खतरा होता है)', 'पपड़ी न खुरचें'],
        kn: ['ಗಾಯದ ಮೇಲೆ ಸಗಣಿ, ಬೂದಿ ಅಥವಾ ಮಣ್ಣು ಹಾಕಬೇಡಿ (ಟಿಟಾನಸ್ ಅಪಾಯ)', 'ಹೊಟ್ಟೆ ಕೆರೆಯಬೇಡಿ']
      }
    },
    whenToSeeDoctor: {
      en: ['Bleeding does not stop after 10 minutes of direct pressure', 'Deep gaping wound that requires stitches', 'Redness, swelling, warmth, and pus oozing from the wound with fever'],
      hi: ['10 मिनट दबाने पर भी खून न रुके', 'गहरा घाव जिसमें टांके लगाने की जरूरत हो', 'घाव लाल होकर सूज जाए, मवाद निकले और बुखार आए'],
      kn: ['10 ನಿಮಿಷ ಒತ್ತಿದರೂ ರಕ್ತ ನಿಲ್ಲದಿದ್ದರೆ', 'ಹೊಲಿಗೆ ಹಾಕಬೇಕಾದ ಆಳವಾದ ಗಾಯ', 'ಗಾಯದಲ್ಲಿ ಕೀವು ಮತ್ತು ಜ್ವರ']
    }
  },

  // 14. Minor Burn
  {
    id: 'minor_burn',
    name: {
      en: 'First-Degree / Minor Superficial Burn',
      hi: 'मामूली जलन (हल्का जलना)',
      kn: 'ಸಣ್ಣ ಸುಟ್ಟ ಗಾಯ (ಮೊದಲ ಹಂತದ ಸುಟ್ಟ ಗಾಯ)'
    },
    category: 'injury',
    severity: 'mild',
    primarySymptoms: ['burn_injury'],
    secondarySymptoms: ['skin_rash'],
    summary: {
      en: 'Superficial burn causing red, painful skin without large open blisters.',
      hi: 'गर्म बर्तन, चाय या पानी से त्वचा का हल्का जलना, जिसमें त्वचा लाल होती है और जलन होती है।',
      kn: 'ಬಿಸಿ ನೀರು ಅಥವಾ ಪಾತ್ರೆ ತಗುಲಿ ಉಂಟಾದ ಸಣ್ಣ ಸುಟ್ಟ ಗಾಯ, ಚರ್ಮ ಕೆಂಪಾಗಿ ಉರಿಯುವುದು.'
    },
    whatToDo: {
      en: [
        'IMMEDIATELY hold the burned area under cool running tap water for 15 to 20 minutes.',
        'Remove rings or tight items near the burn before swelling begins.',
        'Cover loosely with a clean, dry, non-stick sterile gauze.'
      ],
      hi: [
        'तुरंत जले हुए हिस्से पर 15 से 20 मिनट तक नल का सामान्य ठंडा पानी लगातार डालते रहें।',
        'अंगूठी या चूड़ी सूजन आने से पहले तुरंत उतार दें।',
        'साफ सूती कपड़े या बिना चिपके वाली पट्टी से हल्के से ढकें।'
      ],
      kn: [
        'ತಕ್ಷಣವೇ 15-20 ನಿಮಿಷಗಳ ಕಾಲ ತಣ್ಣನೆಯ ಹರಿಯುವ ನೀರಿನಲ್ಲಿ ಸುಟ್ಟ ಜಾಗವನ್ನು ಹಿಡಿಯಿರಿ.',
        'ಉಂಗುರ ಅಥವಾ ಬಳೆಗಳನ್ನು ಊತ ಬರುವ ಮುನ್ನ ತೆಗೆಯಿರಿ.',
        'ಶುದ್ಧವಾದ ಬಟ್ಟೆಯಿಂದ ಸಡಿಲವಾಗಿ ಮುಚ್ಚಿ.'
      ]
    },
    medicines: {
      en: [
        'Silver Sulfadiazine (Silvadene/Burnol) or plain petroleum jelly after cooling with water.',
        'Paracetamol (500mg) for burning pain.'
      ],
      hi: [
        'सिल्वर सल्फाडायजीन (सिल्वरैक्स / बर्नोल) या शुद्ध वैसलीन लगाएं।',
        'दर्द और जलन के लिए पैरासिटामोल।'
      ],
      kn: [
        'ಸಿಲ್ವರ್ ಸಲ್ಫಾಡಿಯಾಜಿನ್ (ಬರ್ನಾಲ್) ಕ್ರೀಮ್.',
        'ಉರಿ ನೋವಿಗೆ ಪ್ಯಾರಾಸಿಟಮಾಲ್.'
      ]
    },
    precautions: {
      dos: {
        en: ['Cool with running water first', 'Keep clean and protected', 'Drink plenty of water'],
        hi: ['पहले नल के सादे पानी से ठंडा करें', 'घाव को साफ रखें', 'खूब पानी पिएं'],
        kn: ['ಮೊದಲು ನೀರಿನಿಂದ ತಂಪು ಮಾಡಿ', 'ಸ್ವಚ್ಛವಾಗಿಡಿ', 'ಸಾಕಷ್ಟು ನೀರು ಕುಡಿಯಿರಿ']
      },
      donts: {
        en: ['DO NOT apply ice directly (damages tissue)', 'DO NOT apply toothpaste, butter, raw egg, or ink', 'DO NOT burst blisters'],
        hi: ['सीधे बर्फ न लगाएं (ऊतक खराब होते हैं)', 'टूथपेस्ट, घी, गोबर या स्याही कभी न लगाएं', 'फफोले न फोड़ें'],
        kn: ['ನೇರವಾಗಿ ಮಂಜುಗಡ್ಡೆ ಇಡಬೇಡಿ', 'ಟೂತ್‌ಪೇಸ್ಟ್, ಬೆಣ್ಣೆ ಹಚ್ಚಬೇಡಿ', 'ಗುಳ್ಳೆಗಳನ್ನು ಒಡೆಯಬೇಡಿ']
      }
    },
    whenToSeeDoctor: {
      en: ['Burn is on face, hands, feet, groin, or major joints', 'Skin is charred, black, or leathery white (3rd degree)', 'Burn is larger than the palm of your hand'],
      hi: ['चेहरे, हाथ, पंजे, जोड़ों या गुप्त अंगों पर जला हो', 'चमड़ी काली, जली हुई या सुन्न हो गई हो', 'जला हुआ हिस्सा हथेली से बड़ा हो'],
      kn: ['ಮುಖ, ಕೈ, ಪಾದ ಅಥವಾ ಕೀಲುಗಳ ಬಳಿ ಸುಟ್ಟಿದ್ದರೆ', 'ಚರ್ಮ ಕಪ್ಪಾಗಿ ಮರಗಟ್ಟಿದ್ದರೆ', 'ಅಂಗೈಗಿಂತ ದೊಡ್ಡದಾಗಿದ್ದರೆ']
    }
  },

  // 15. Sprain / Muscle Strain
  {
    id: 'sprain_strain',
    name: {
      en: 'Sprain / Muscle Strain',
      hi: 'मोच / नस खिंचना',
      kn: 'ಉಳುಕು / ಸ್ನಾಯು ಸೆಳೆತ'
    },
    category: 'musculoskeletal',
    severity: 'mild',
    primarySymptoms: ['joint_swelling_pain'],
    secondarySymptoms: ['back_pain'],
    summary: {
      en: 'Twisting injury to ligaments or muscles causing swelling, tenderness, and painful joint movement.',
      hi: 'पैर मुड़ने या वजन उठाने से नस खिंचना या मोच आना, जिससे सूजन और चलने में दर्द होता है।',
      kn: 'ಕಾಲು ತಿರುಚಿಕೊಳ್ಳುವುದು ಅಥವಾ ಭಾರ ಎತ್ತಿದ್ದರಿಂದ ಉಂಟಾಗುವ ಉಳುಕು, ಊತ ಮತ್ತು ನೋವು.'
    },
    whatToDo: {
      en: [
        'Follow R.I.C.E. principles: Rest, Ice (wrapped in cloth for 15 mins), Compression (crepe bandage), Elevation.',
        'Keep the injured limb elevated on pillows above heart level to reduce swelling.',
        'Avoid putting weight on the injured foot or ankle.'
      ],
      hi: [
        'R.I.C.E. नियम अपनाएं: आराम करें, कपड़े में लपेट कर बर्फ से 15 मिनट सिंकाई करें, गर्म क्रेप पट्टी बांधें, पैर को तकिए पर ऊंचा रखें।',
        'सूजन कम करने के लिए पैर को हृदय के स्तर से थोड़ा ऊंचा रखें।',
        'चोट लगे पैर पर वजन डालकर चलने से बचें।'
      ],
      kn: [
        'R.I.C.E. ನಿಯಮ ಪಾಲಿಸಿ: ವಿಶ್ರಾಂತಿ, ಐಸ್ ಪ್ಯಾಕ್, ಕ್ರೇಪ್ ಬ್ಯಾಂಡೇಜ್ ಕಟ್ಟುವುದು, ಎತ್ತರದಲ್ಲಿಡುವುದು.',
        'ಊತ ಇಳಿಯಲು ಕಾಲನ್ನು ದಿಂಬಿನ ಮೇಲೆ ಎತ್ತರದಲ್ಲಿಡಿ.',
        'ನೋವಿರುವ ಕಾಲಿನ ಮೇಲೆ ತೂಕ ಹಾಕಿ ನಡೆಯಬೇಡಿ.'
      ]
    },
    medicines: {
      en: [
        'Paracetamol (500mg) for pain.',
        'Topical pain-relief gel (Diclofenac or herbal liniment) gently applied without harsh rubbing.'
      ],
      hi: [
        'दर्द के लिए पैरासिटामोल।',
        'डिक्लोफेनेक जेल या दर्द निवारक मलम हल्के हाथ से लगाएं (जोर से मालिश न करें)।'
      ],
      kn: [
        'ನೋವಿಗೆ ಪ್ಯಾರಾಸಿಟಮಾಲ್.',
        'ನೋವು ನಿವಾರಕ ಜೆಲ್ ಅನ್ನು ನಿಧಾನವಾಗಿ ಹಚ್ಚಿ (ಜೋರಾಗಿ ಉಜ್ಜಬೇಡಿ).'
      ]
    },
    precautions: {
      dos: {
        en: ['Support joint with crepe bandage', 'Use cold ice packs for the first 48 hours'],
        hi: ['गर्म पट्टी से जोड़ को सहारा दें', 'शुरुआती 48 घंटे में केवल बर्फ की ठंडी सिंकाई करें'],
        kn: ['ಕ್ರೇಪ್ ಬ್ಯಾಂಡೇಜ್ ಬೆಂಬಲ ನೀಡಿ', 'ಮೊದಲ 48 ಗಂಟೆ ಐಸ್ ಬಳಸಿ']
      },
      donts: {
        en: ['DO NOT apply hot fermentations or vigorous massage in the first 48 hours (increases swelling)', 'Do not walk on injured leg'],
        hi: ['शुरुआती 2 दिन गर्म सिंकाई या जोर से मालिश न करें (इससे सूजन बढ़ती है)', 'चोट वाले पैर पर न चलें'],
        kn: ['ಮೊದಲ 48 ಗಂಟೆ ಬಿಸಿ ಶಾಖ ಅಥವಾ ಬಲವಾದ ಮಸಾಜ್ ಮಾಡಬೇಡಿ', 'ಕಾಲನ್ನು ಹೆಚ್ಚು ಬಳಸಬೇಡಿ']
      }
    },
    whenToSeeDoctor: {
      en: ['Completely unable to bear weight or take 4 steps', 'Visible deformity or bone looks crooked (suspect fracture)', 'Numbness or tingling in toes or foot'],
      hi: ['पैर पर बिल्कुल भी वजन न रख पाना या 4 कदम भी न चल पाना', 'हड्डी टेढ़ी दिखना (फ्रैक्चर का अंदेशा)', 'पैर की उंगलियां सुन्न पड़ना'],
      kn: ['ಕಾಲಿನ ಮೇಲೆ ನಿಲ್ಲಲು ಅಥವಾ 4 ಹೆಜ್ಜೆ ಇಡಲು ಸಾಧ್ಯವಾಗದಿದ್ದರೆ', 'ಮೂಳೆ ಮುರಿದಂತೆ ಕಾಣಿಸಿದರೆ', 'ಕಾಲ್ಬೆರಳುಗಳು ಮರಗಟ್ಟಿದರೆ']
    }
  },

  // 16. Asthma Flare-up
  {
    id: 'asthma_flare',
    name: {
      en: 'Asthma / Bronchial Wheezing Flare-up',
      hi: 'दमा का दौरा / सांस फूलना (घरघराहट)',
      kn: 'ಉಬ್ಬಸ / ಆಸ್ತಮಾ ಉಲ್ಬಣ'
    },
    category: 'respiratory',
    severity: 'emergency',
    primarySymptoms: ['breathlessness', 'cough_persistent'],
    secondarySymptoms: ['chest_pain', 'fatigue'],
    summary: {
      en: 'Sudden narrowing of airways causing whistling wheeze, chest tightness, and severe struggle to breathe.',
      hi: 'सांस की नलियों में सिकुड़न से सीने से सीटी जैसी आवाज आना, सांस फूलना और बोलने में परेशानी।',
      kn: 'ಶ್ವಾಸನಾಳಗಳ ಸೆಳೆತದಿಂದ ಉಂಟಾಗುವ ಉಬ್ಬಸ, ಎದೆಯಲ್ಲಿ ಶಿಳ್ಳೆ ಶಬ್ದ ಮತ್ತು ಉಸಿರಾಟದ ತೀವ್ರ ತೊಂದರೆ.'
    },
    whatToDo: {
      en: [
        'Sit upright comfortably; DO NOT lie flat on the back.',
        'Use the prescribed reliever inhaler (Salbutamol/Asthalin) immediately: 2 to 4 puffs via spacer every 10 minutes if trained.',
        'Loosen tight clothing and ensure fresh airy ventilation.'
      ],
      hi: [
        'मरीज को सीधा बैठाएं; कभी भी पीठ के बल सीधा न लिटाएं।',
        'यदि इनहेलर (अस्थालिन / साल्बुटामोल) मौजूद है तो तुरंत 2 से 4 पफ लें।',
        'तंग कपड़े ढीले करें और खुली हवा में बैठाएं।'
      ],
      kn: [
        'ನೇರವಾಗಿ ಕುಳಿತುಕೊಳ್ಳಿ; ಮಲಗಬೇಡಿ.',
        'ಇನ್ಹೇಲರ್ (ಸಾಲ್ಬುಟಮಾಲ್/ಅಸ್ಥಾಲಿನ್) ಲಭ್ಯವಿದ್ದರೆ ತಕ್ಷಣ 2-4 ಪಫ್ ತೆಗೆದುಕೊಳ್ಳಿ.',
        'ಬಟ್ಟೆಗಳನ್ನು ಸಡಿಲಗೊಳಿಸಿ, ಗಾಳಿಯಾಡುವ ಜಾಗದಲ್ಲಿರಿ.'
      ]
    },
    medicines: {
      en: [
        'Salbutamol reliever inhaler as prescribed.',
        'Seek emergency medical evaluation at PHC.'
      ],
      hi: [
        'साल्बुटामोल इनहेलर।',
        'तुरंत अस्पताल ले जाएं।'
      ],
      kn: [
        'ಸಾಲ್ಬುಟಮಾಲ್ ಇನ್ಹೇಲರ್.',
        'ತಕ್ಷಣ ಆಸ್ಪತ್ರೆಗೆ ಕರೆದೊಯ್ಯಿರಿ.'
      ]
    },
    precautions: {
      dos: {
        en: ['Stay calm to reduce breathing panic', 'Carry inhaler at all times', 'Avoid dust and smoke'],
        hi: ['घबराएं नहीं, शांत रहें', 'इनहेलर हमेशा साथ रखें', 'धूल और चूल्हे के धुएं से बचें'],
        kn: ['ಶಾಂತರಾಗಿರಿ', 'ಇನ್ಹೇಲರ್ ಸದಾ ಜೊತೆಯಲ್ಲಿರಲಿ', 'ಧೂಳು-ಹೊಗೆಯಿಂದ ದೂರವಿರಿ']
      },
      donts: {
        en: ['Do not lie down flat', 'Do not expose to bidi/chulha smoke or incense', 'Do not delay emergency transport'],
        hi: ['सीधा न लिटाएं', 'बीड़ी, सिगरेट या चूल्हे के धुएं के पास न रहें', 'अस्पताल जाने में देरी न करें'],
        kn: ['ಮಲಗಬೇಡಿ', 'ಹೊಗೆಯಿರುವ ಜಾಗದಲ್ಲಿ ಇರಬೇಡಿ', 'ಆಸ್ಪತ್ರೆಗೆ ಹೋಗಲು ತಡಮಾಡಬೇಡಿ']
      }
    },
    whenToSeeDoctor: {
      en: ['Unable to speak full sentences without gasping for breath', 'Lips or fingernails turn blue or pale grey', 'Inhaler puffs do not relieve symptoms within 15 minutes (CALL 108)'],
      hi: ['एक सांस में पूरा वाक्य न बोल पाना', 'होंठ या नाखून नीले पड़ना', 'इनहेलर लेने के 15 मिनट बाद भी आराम न मिलना (108 पर कॉल करें)'],
      kn: ['ಸಂಪೂರ್ಣ ವಾಕ್ಯ ಮಾತನಾಡಲು ಉಸಿರು ಸಾಲದಿರುವುದು', 'ತುಟಿ ಅಥವಾ ಉಗುರುಗಳು ನೀಲಿ ಬಣ್ಣಕ್ಕೆ ತಿರುಗಿದರೆ', 'ಇನ್ಹೇಲರ್ ತೆಗೆದುಕೊಂಡರೂ ಉಸಿರಾಟ ಸರಿಹೋಗದಿದ್ದರೆ (108 ಕರೆ ಮಾಡಿ)']
    }
  },

  // 17. Possible Heart Attack (EMERGENCY)
  {
    id: 'possible_heart_attack',
    name: {
      en: 'Possible Heart Attack (EMERGENCY)',
      hi: 'संभावित दिल का दौरा (आपातकालीन)',
      kn: 'ಹೃದಯಾಘಾತದ ಸಾಧ್ಯತೆ (ತುರ್ತು ಪರಿಸ್ಥಿತಿ)'
    },
    category: 'cardiovascular',
    severity: 'emergency',
    primarySymptoms: ['chest_pain', 'breathlessness'],
    secondarySymptoms: ['dizziness', 'vomiting', 'fatigue'],
    summary: {
      en: 'Heavy crushing chest pressure radiating to arm, neck, or jaw with cold sweats and shortness of breath.',
      hi: 'सीने में भारी दबाव या जकड़न, जो बाएं हाथ, जबड़े या पीठ में फैले, साथ में ठंडा पसीना और सांस फूलना।',
      kn: 'ಎದೆಯಲ್ಲಿ ಅತಿಯಾದ ಭಾರ ಅಥವಾ ಒತ್ತಡ, ಎಡಗೈ, ದವಡೆಗೆ ನೋವು ಹರಡುವುದು ಮತ್ತು ತಣ್ಣನೆಯ ಬೆವರು.'
    },
    whatToDo: {
      en: [
        'CALL AMBULANCE 108 IMMEDIATELY.',
        'Have the patient sit semi-reclined and rest completely; do not let them walk or exert.',
        'Loosen collar and tight clothing; provide fresh air.',
        'If not allergic and conscious: Chew one 300mg Aspirin tablet while waiting for ambulance.'
      ],
      hi: [
        'तुरंत 108 एंबुलेंस को फोन करें।',
        'मरीज को सहारा देकर बैठाएं, बिल्कुल भी चलने या उठने न दें।',
        'गले के बटन और तंग कपड़े ढीले करें।',
        'यदि एलर्जी न हो और मरीज होश में हो: 300mg एस्पिरिन की गोली चबाने को दें।'
      ],
      kn: [
        'ತಕ್ಷಣ 108 ಆಂಬ್ಯುಲೆನ್ಸ್‌ಗೆ ಕರೆ ಮಾಡಿ.',
        'ರೋಗಿಯನ್ನು ವಿಶ್ರಾಂತಿಯಲ್ಲಿ ಕೂರಿಸಿ; ನಡೆಯಲು ಬಿಡಬೇಡಿ.',
        'ಬಟ್ಟೆ ಸಡಿಲಗೊಳಿಸಿ.',
        'ಅಲರ್ಜಿ ಇಲ್ಲದಿದ್ದರೆ: ಆಸ್ಪಿರಿನ್ (300mg) ಮಾತ್ರೆಯನ್ನು ಅಗಿಯಲು ನೀಡಿ.'
      ]
    },
    medicines: {
      en: [
        'Single dose soluble Aspirin (300mg) chewed immediately (if no known allergy or active bleeding).',
        'Emergency hospital care required immediately.'
      ],
      hi: [
        '300mg एस्पिरिन (Aspirin) की गोली चबाकर लें (यदि पहले से खून बहने की बीमारी या एलर्जी न हो)।',
        'तुरंत अस्पताल की आवश्यकता।'
      ],
      kn: [
        'ಆಸ್ಪಿರಿನ್ (300mg) ಅಗಿದು ನುಂಗುವುದು.',
        'ತಕ್ಷಣ ತುರ್ತು ಆಸ್ಪತ್ರೆಗೆ ದಾಖಲಿಸಿ.'
      ]
    },
    precautions: {
      dos: {
        en: ['Keep patient calm and still', 'Call 108 without delay', 'Monitor breathing'],
        hi: ['मरीज को बिल्कुल शांत रखें', 'बिना देर किए 108 पर कॉल करें', 'सांस पर नजर रखें'],
        kn: ['ರೋಗಿ ಶಾಂತವಾಗಿರಲಿ', 'ತಕ್ಷಣ 108 ಕರೆ ಮಾಡಿ', 'ಉಸಿರಾಟ ಗಮನಿಸಿ']
      },
      donts: {
        en: ['DO NOT dismiss as "simple acidity" or "gas"', 'Do NOT let the patient walk or drive', 'Do NOT give water if unconscious'],
        hi: ['इसे केवल "गैस" या "एसिडिटी" समझकर अनदेखा न करें', 'मरीज को पैदल न चलने दें या गाड़ी न चलाने दें', 'बेहोशी में पानी न पिलाएं'],
        kn: ['ಕೇವಲ ಗ್ಯಾಸ್ಟ್ರಿಕ್ ಎಂದು ನಿರ್ಲಕ್ಷಿಸಬೇಡಿ', 'ರೋಗಿ ನಡೆಯಬಾರದು', 'ಪ್ರಜ್ಞೆ ತಪ್ಪಿದ್ದರೆ ನೀರು ಕುಡಿಸಬೇಡಿ']
      }
    },
    whenToSeeDoctor: {
      en: ['EMERGENCY: Immediate hospital transfer is mandatory for all suspected chest attacks.'],
      hi: ['आपातकाल: तुरंत नजदीकी बड़े अस्पताल या आईसीयू वाले केंद्र पर ले जाएं।'],
      kn: ['ತುರ್ತು ಪರಿಸ್ಥಿತಿ: ತಕ್ಷಣ ಸಮೀಪದ ಆಸ್ಪತ್ರೆಗೆ ಕರೆದೊಯ್ಯುವುದು ಕಡ್ಡಾಯ.']
    }
  },

  // 18. Possible Stroke (FAST)
  {
    id: 'possible_stroke',
    name: {
      en: 'Possible Stroke (Brain Attack - FAST)',
      hi: 'संभावित स्ट्रोक / फालिज (दिमागी दौरा)',
      kn: 'ಪಾರ್ಶ್ವವಾಯು / ಲಕ್ವದ ಸಾಧ್ಯತೆ'
    },
    category: 'neurological',
    severity: 'emergency',
    primarySymptoms: ['facial_droop_speech'],
    secondarySymptoms: ['dizziness', 'severe_sudden_headache'],
    summary: {
      en: 'Sudden weakness or numbness on one side of face/arm, slurred speech, or loss of balance.',
      hi: 'चेहरा एक तरफ लटकना, हाथ उठ न पाना, बोली लड़खड़ाना या अचानक संतुलन खोना।',
      kn: 'ಮುಖ ಒಂದು ಬದಿಗೆ ವಕ್ರವಾಗುವುದು, ಕೈ ಎತ್ತಲು ಸಾಧ್ಯವಾಗದಿರುವುದು, ಮಾತು ತೊದಲುವುದು.'
    },
    whatToDo: {
      en: [
        'CALL AMBULANCE 108 IMMEDIATELY.',
        'Check F.A.S.T: Face drooping? Arm weakness? Speech slurred? Time to call 108!',
        'Note the EXACT TIME symptoms started (crucial for clot-busting medicine at hospital).',
        'Lay the person on their side (recovery position) if drowsy to protect airway.'
      ],
      hi: [
        'तुरंत 108 एंबुलेंस बुलाएं।',
        'F.A.S.T चेक करें: चेहरा टेढ़ा? हाथ कमजोर? बोली लड़खड़ाई? तुरंत अस्पताल का समय!',
        'लक्षण शुरू होने का सही समय नोट करें (यह अस्पताल में दवा के लिए बहुत जरूरी है)।',
        'मरीज को करवट से लिटाएं ताकि उल्टी गले में न फंसे।'
      ],
      kn: [
        'ತಕ್ಷಣ 108 ಆಂಬ್ಯುಲೆನ್ಸ್‌ಗೆ ಕರೆ ಮಾಡಿ.',
        'F.A.S.T ಪರೀಕ್ಷಿಸಿ: ಮುಖ ವಕ್ರವಾಗಿದೆಯೇ? ಕೈ ಬಲಹೀನವಾಗಿದೆಯೇ? ಮಾತು ತೊದಲುತ್ತಿದೆಯೇ? ತಕ್ಷಣ ಕರೆ ಮಾಡಿ!',
        'ತೊಂದರೆ ಶುರುವಾದ ನಿಖರ ಸಮಯ ಗುರುತುಹಾಕಿ.',
        'ರೋಗಿಯನ್ನು ಒಂದು ಮಗ್ಗಲಿಗೆ ಮಲಗಿಸಿ.'
      ]
    },
    medicines: {
      en: [
        'DO NOT give any medicines, food, or water by mouth (swallowing reflex may be paralyzed, causing choking).',
        'Do NOT give aspirin until brain scan confirms it is not a bleed.'
      ],
      hi: [
        'मुंह से कुछ भी खाना, पानी या गोली न दें (गले में फंसने का भारी खतरा होता है)।',
        'सीटी स्कैन होने तक एस्पिरिन न दें।'
      ],
      kn: [
        'ಬಾಯಿಗೆ ಯಾವುದೇ ಆಹಾರ, ನೀರು ಅಥವಾ ಔಷಧಿ ನೀಡಬೇಡಿ.',
        'ಸಿಟಿ ಸ್ಕ್ಯಾನ್ ಆಗುವವರೆಗೆ ಆಸ್ಪಿರಿನ್ ನೀಡಬೇಡಿ.'
      ]
    },
    precautions: {
      dos: {
        en: ['Record time of onset', 'Keep airway open', 'Reach CT-scan equipped hospital within 3 hours'],
        hi: ['दौरे का समय नोट करें', 'मरीज को करवट दिलाकर रखें', '3 घंटे के अंदर सीटी स्कैन वाले अस्पताल पहुंचें'],
        kn: ['ಲಕ್ಷಣ ಪ್ರಾರಂಭವಾದ ಸಮಯ ಬರೆದಿಡಿ', 'ಉಸಿರಾಟ ಸರಾಗವಾಗಿರಲಿ', '3 ಗಂಟೆಯೊಳಗೆ ಆಸ್ಪತ್ರೆ ತಲುಪಿ']
      },
      donts: {
        en: ['Do not give food, water, or tea', 'Do not massage or wait for symptoms to "pass"'],
        hi: ['पानी या चाय न पिलाएं', 'मालिश न करें और लक्षण ठीक होने का इंतजार न करें'],
        kn: ['ನೀರು ಅಥವಾ ಆಹಾರ ನೀಡಬೇಡಿ', 'ಕಾಯುತ್ತಾ ಕೂರಬೇಡಿ']
      }
    },
    whenToSeeDoctor: {
      en: ['EMERGENCY: Every minute lost is brain tissue lost. Hospitalize immediately.'],
      hi: ['आपातकाल: हर एक मिनट कीमती है। तुरंत सीटी स्कैन वाले अस्पताल ले जाएं।'],
      kn: ['ತುರ್ತು ಪರಿಸ್ಥಿತಿ: ತಕ್ಷಣ ಸಿಟಿ ಸ್ಕ್ಯಾನ್ ಸೌಲಭ್ಯವಿರುವ ಆಸ್ಪತ್ರೆಗೆ ಕರೆದೊಯ್ಯಿರಿ.']
    }
  },

  // 19. Snake Bite (EMERGENCY)
  {
    id: 'snake_bite_emergency',
    name: {
      en: 'Snake Bite (EMERGENCY)',
      hi: 'सांप का काटना (अत्यंत गंभीर आपातकाल)',
      kn: 'ಹಾವು ಕಡಿತ (ತೀವ್ರ ತುರ್ತು ಪರಿಸ್ಥಿತಿ)'
    },
    category: 'toxicology',
    severity: 'emergency',
    primarySymptoms: ['snake_bite'],
    secondarySymptoms: ['dizziness', 'vomiting', 'breathlessness'],
    summary: {
      en: 'Bite from potentially venomous snake requiring urgent anti-snake venom at the nearest government hospital.',
      hi: 'जहरीले सांप के काटने की आशंका, जिसके लिए सरकारी अस्पताल में एंटी-स्नेक वेनम का टीका तुरंत चाहिए।',
      kn: 'ವಿಷಕಾರಿ ಹಾವಿನ ಕಡಿತದ ಸಾಧ್ಯತೆ, ತಕ್ಷಣ ಹತ್ತಿರದ ಸರ್ಕಾರಿ ಆಸ್ಪತ್ರೆಯಲ್ಲಿ ಆಂಟಿ-ಸ್ನೇಕ್ ವೆನಮ್ ಪಡೆಯಬೇಕು.'
    },
    whatToDo: {
      en: [
        'RUSH TO NEAREST GOVERNMENT HOSPITAL / PHC WITH ANTI-SNAKE VENOM (ASV).',
        'IMMOBILIZE THE BITTEN LIMB with a splint/cloth like a fracture; keep it still and below heart level.',
        'Reassure the patient and keep them completely calm and motionless.',
        'Remove rings, bangles, and tight clothes before swelling spreads.'
      ],
      hi: [
        'तुरंत उस सरकारी अस्पताल या PHC भागें जहां एंटी-स्नेक वेनम (ASV) उपलब्ध हो।',
        'काटे हुए अंग को लकड़ी की खपच्ची या कपड़े से बिल्कुल स्थिर रखें (हिलाने से जहर फैलता है)।',
        'मरीज को शांत रखें और भागने-दौड़ने न दें।',
        'अंगूठी, चूड़ी और तंग कपड़े तुरंत उतार दें।'
      ],
      kn: [
        'ಆಂಟಿ-ಸ್ನೇಕ್ ವೆನಮ್ ಲಭ್ಯವಿರುವ ಹತ್ತಿರದ ಸರ್ಕಾರಿ ಆಸ್ಪತ್ರೆಗೆ ತಕ್ಷಣ ಕರೆದೊಯ್ಯಿರಿ.',
        'ಕಡಿತಕ್ಕೊಳಗಾದ ಅಂಗವನ್ನು ಅಲುಗಾಡಿಸದೆ ಕೋಲಿನ ಆಸರೆ ನೀಡಿ ಸ್ಥಿರವಾಗಿಡಿ.',
        'ರೋಗಿ ಗಾಬರಿಯಾಗದಂತೆ ಶಾಂತವಾಗಿರಿಸಿ.',
        'ಉಂಗುರ, ಬಳೆಗಳನ್ನು ತಕ್ಷಣ ತೆಗೆಯಿರಿ.'
      ]
    },
    medicines: {
      en: [
        'Anti-Snake Venom (ASV) is the ONLY scientific antidote, given intravenously at the hospital.',
        'No village remedies or oral tablets.'
      ],
      hi: [
        'एंटी-स्नेक वेनम (ASV) ही एकमात्र जीवनरक्षक इलाज है, जो अस्पताल में नसों द्वारा दिया जाता है।',
        'झाड़-फूंक या जड़ी-बूटी में समय न गंवाएं।'
      ],
      kn: [
        'ಆಂಟಿ-ಸ್ನೇಕ್ ವೆನಮ್ (ASV) ಮಾತ್ರ ಏಕೈಕ ಚಿಕಿತ್ಸೆ, ಆಸ್ಪತ್ರೆಯಲ್ಲಿ ನೀಡಲಾಗುತ್ತದೆ.',
        'ನಾಟಿ ವೈದ್ಯ ಅಥವಾ ಮಂತ್ರಗಳಲ್ಲಿ ಸಮಯ ವ್ಯರ್ಥ ಮಾಡಬೇಡಿ.'
      ]
    },
    precautions: {
      dos: {
        en: ['Keep bitten limb still', 'Rush directly to hospital', 'Note snake appearance if safely seen'],
        hi: ['काटे हुए हाथ या पैर को बिल्कुल न हिलाएं', 'सीधे सरकारी अस्पताल जाएं', 'सांप को सुरक्षित देखा हो तो रंग-रूप याद रखें'],
        kn: ['ಕಡಿತದ ಜಾಗ ಅಲುಗಾಡಿಸಬೇಡಿ', 'ನೇರವಾಗಿ ಆಸ್ಪತ್ರೆಗೆ ತೆರಳಿ']
      },
      donts: {
        en: ['DO NOT cut the wound with blades', 'DO NOT try to suck out venom with mouth', 'DO NOT tie tight tourniquets (causes gangrene and limb loss)', 'DO NOT waste time on faith healers'],
        hi: ['ब्लेड या चाकू से चीरा न लगाएं', 'मुंह से जहर चूसने की कोशिश न करें', 'कसकर रस्सी या तार न बांधें (अंग सड़ सकता है)', 'झाड़-फूंक में 1 मिनट भी बर्बाद न करें'],
        kn: ['ಗಾಯವನ್ನು ಬ್ಲೇಡ್‌ನಿಂದ ಕತ್ತರಿಸಬೇಡಿ', 'ಬಾಯಿಂದ ವಿಷ ಹೀರುವ ಪ್ರಯತ್ನ ಬೇಡ', 'ಹಗ್ಗ ಅಥವಾ ಬಟ್ಟೆಯಿಂದ ರಕ್ತ ಸಂಚಾರ ನಿಲ್ಲುವಂತೆ ಬಿಗಿಯಾಗಿ ಕಟ್ಟಬೇಡಿ', 'ಮಂತ್ರ-ತಂತ್ರಗಳಿಗೆ ಹೋಗಬೇಡಿ']
      }
    },
    whenToSeeDoctor: {
      en: ['EMERGENCY: Immediate hospital emergency admission is mandatory.'],
      hi: ['आपातकाल: तुरंत अस्पताल ले जाएं, हर मिनट जान बचाने के लिए जरूरी है।'],
      kn: ['ತುರ್ತು ಪರಿಸ್ಥಿತಿ: ತಕ್ಷಣ ಆಸ್ಪತ್ರೆಗೆ ಸೇರಿಸಿ.']
    }
  },

  // 20. Possible Appendicitis
  {
    id: 'possible_appendicitis',
    name: {
      en: 'Possible Appendicitis',
      hi: 'अपेंडिक्स का दर्द (संभावित)',
      kn: 'ಅಪೆಂಡಿಕ್ಸ್ ನೋವಿನ ಸಾಧ್ಯತೆ'
    },
    category: 'digestive',
    severity: 'emergency',
    primarySymptoms: ['severe_right_stomach_pain'],
    secondarySymptoms: ['vomiting', 'fever'],
    summary: {
      en: 'Inflammation of the appendix causing severe sharp pain in the lower right abdomen with vomiting and fever.',
      hi: 'नाभि से शुरू होकर पेट के निचले दाएं हिस्से में जाने वाला तेज असहनीय दर्द, उल्टी और हल्का बुखार।',
      kn: 'ಹೊಟ್ಟೆಯ ಕೆಳಗಿನ ಬಲಭಾಗದಲ್ಲಿ ತೀವ್ರ ಚುಚ್ಚುವ ನೋವು, ವಾಂತಿ ಮತ್ತು ಜ್ವರ.'
    },
    whatToDo: {
      en: [
        'Visit a hospital or surgical PHC immediately for clinical examination and ultrasound.',
        'Keep the patient fasting (NIL BY MOUTH); do not give food or drink in case emergency surgery is needed.',
        'Rest in bed.'
      ],
      hi: [
        'तुरंत अस्पताल जाएं ताकि डॉक्टर जांच और अल्ट्रासाउंड कर सकें।',
        'मरीज को कुछ भी खाने-पीने को न दें (क्योंकि ऑपरेशन की जरूरत पड़ सकती है)।',
        'बिस्तर पर आराम करने दें।'
      ],
      kn: [
        'ತಕ್ಷಣ ಆಸ್ಪತ್ರೆಗೆ ಭೇಟಿ ನೀಡಿ ಅಲ್ಟ್ರಾಸೌಂಡ್ ಸ್ಕ್ಯಾನ್ ಮಾಡಿಸಿಕೊಳ್ಳಿ.',
        'ಏನನ್ನೂ ತಿನ್ನಲು ಅಥವಾ ಕುಡಿಯಲು ನೀಡಬೇಡಿ (ತುರ್ತು ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯ ಅಗತ್ಯವಿರಬಹುದು).',
        'ವಿಶ್ರಾಂತಿ ಪಡೆಯಿರಿ.'
      ]
    },
    medicines: {
      en: [
        'DO NOT take strong painkillers or laxatives as they may mask signs or cause rupture.',
        'Requires hospital evaluation.'
      ],
      hi: [
        'दर्द की तेज गोलियां या पेट साफ करने की दवा बिल्कुल न लें (इससे अपेंडिक्स फटने का खतरा होता है)।'
      ],
      kn: [
        'ತೀವ್ರ ನೋವು ನಿವಾರಕಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳಬೇಡಿ (ಇದು ಕರುಳು ಒಡೆಯಲು ಕಾರಣವಾಗಬಹುದು).'
      ]
    },
    precautions: {
      dos: {
        en: ['Seek urgent surgical evaluation', 'Keep fasting until examined by doctor'],
        hi: ['तुरंत डॉक्टर को दिखाएं', 'जांच होने तक भूखे पेट रहें'],
        kn: ['ವೈದ್ಯರಲ್ಲಿ ತುರ್ತು ಪರೀಕ್ಷೆ', 'ಏನನ್ನೂ ತಿನ್ನಬೇಡಿ']
      },
      donts: {
        en: ['Do not apply hot water bag to the right stomach', 'Do not take castor oil or purgatives'],
        hi: ['पेट के दाएं हिस्से पर गर्म पानी की बोतल से सिंकाई न करें', 'अरंडी का तेल या पेट साफ करने वाली दवा न पिएं'],
        kn: ['ಹೊಟ್ಟೆಯ ಮೇಲೆ ಬಿಸಿ ಶಾಖ ಕೊಡಬೇಡಿ', 'ವಿರೇಚಕಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳಬೇಡಿ']
      }
    },
    whenToSeeDoctor: {
      en: ['Pain is sharp and getting worse with walking or coughing', 'Fever and vomiting develop with right abdominal tenderness'],
      hi: ['खांसने या चलने पर पेट के दाएं हिस्से में तेज दर्द होना', 'उल्टी और बुखार के साथ पेट छूने पर तेज चीख निकलना'],
      kn: ['ನಡೆಯುವಾಗ ಅಥವಾ ಕೆಮ್ಮುವಾಗ ನೋವು ಹೆಚ್ಚಾದರೆ', 'ಜ್ವರ ಮತ್ತು ವಾಂತಿಯೊಂದಿಗೆ ಬಲಭಾಗದಲ್ಲಿ ಮುಟ್ಟಲಾಗದ ನೋವು']
    }
  },

  // 21. Severe Dehydration
  {
    id: 'severe_dehydration',
    name: {
      en: 'Severe Dehydration',
      hi: 'शरीर में पानी की अत्यधिक कमी (डिहाइड्रेशन)',
      kn: 'ತೀವ್ರ ನಿರ್ಜಲೀಕರಣ'
    },
    category: 'systemic',
    severity: 'emergency',
    primarySymptoms: ['loose_motions', 'vomiting', 'dizziness', 'fatigue'],
    secondarySymptoms: ['fever'],
    summary: {
      en: 'Critical loss of body water and salts from diarrhea or heat, leading to sunken eyes, lack of urination, and low blood pressure shock.',
      hi: 'दस्त, उल्टी या तेज धूप से शरीर में पानी और नमक की खतरनाक कमी, जिससे आंखें धंसना और पेशाब बंद होना शामिल है।',
      kn: 'ವಾಂತಿ, ಭೇದಿಯಿಂದ ದೇಹದಲ್ಲಿ ನೀರು ಮತ್ತು ಲವಣಾಂಶದ ಕೊರತೆ, ಕಣ್ಣು ಗುಳಿಕೆ ಬೀಳುವುದು ಮತ್ತು ಮೂತ್ರ ನಿಲ್ಲುವುದು.'
    },
    whatToDo: {
      en: [
        'RUSH TO CLINIC / PHC FOR INTRAVENOUS (IV) FLUIDS (Ringer Lactate / Normal Saline).',
        'While traveling, continuously give sips of ORS if the patient can swallow.',
        'Keep the patient cool and elevate legs.'
      ],
      hi: [
        'तुरंत अस्पताल या PHC ले जाएं ताकि ड्रिप (IV फ्लूइड) चढ़ाई जा सके।',
        'रास्ते में लगातार चम्मच से ओआरएस (ORS) का घोल पिलाते रहें।',
        'पैरों को थोड़ा ऊंचा रखें।'
      ],
      kn: [
        'ತಕ್ಷಣ ಕ್ಲಿನಿಕ್ ಅಥವಾ ಪಿಎಚ್‌ಸಿಗೆ ಕರೆದೊಯ್ದು ಡ್ರಿಪ್ಸ್ (ಐವಿ ಫ್ಲೂಯಿಡ್ಸ್) ಹಾಕಿಸಿ.',
        'ದಾರಿಯಲ್ಲಿ ಸ್ವಲ್ಪ ಸ್ವಲ್ಪವೇ ಓಆರ್‌ಎಸ್ ನೀರು ಕುಡಿಸುತ್ತಿರಿ.',
        'ಕಾಲುಗಳನ್ನು ಸ್ವಲ್ಪ ಎತ್ತರದಲ್ಲಿಡಿ.'
      ]
    },
    medicines: {
      en: [
        'Intravenous fluids (IV drip) at hospital.',
        'ORS solution for oral intake.'
      ],
      hi: [
        'अस्पताल में ग्लूकोज / सलाइन की ड्रिप।',
        'ओआरएस का घोल।'
      ],
      kn: [
        'ಆಸ್ಪತ್ರೆಯಲ್ಲಿ ಐವಿ ಡ್ರಿಪ್ಸ್.',
        'ಓಆರ್‌ಎಸ್ ದ್ರಾವಣ.'
      ]
    },
    precautions: {
      dos: {
        en: ['Start ORS at first signs', 'Rush for IV fluids if no urine for 6-8 hours'],
        hi: ['शुरुआत से ही ओआरएस पिलाएं', '6 घंटे पेशाब न आने पर तुरंत अस्पताल जाएं'],
        kn: ['ಆರಂಭದಲ್ಲೇ ಒಆರ್‌ಎಸ್ ನೀಡಿ', 'ಮೂತ್ರ ಬಾರದಿದ್ದರೆ ಆಸ್ಪತ್ರೆಗೆ ತೆರಳಿ']
      },
      donts: {
        en: ['Do not give only plain water in large quantities without salts (dilutes electrolytes)', 'Do not delay hospital trip'],
        hi: ['बिना नमक या ओआरएस के केवल सादा पानी बहुत ज्यादा न पिलाएं', 'अस्पताल जाने में देर न करें'],
        kn: ['ಕೇವಲ ಸಪ್ಪೆ ನೀರು ಕುಡಿಸಬೇಡಿ (ಲವಣಾಂಶ ಕಡಿಮೆಯಾಗುತ್ತದೆ)', 'ತಡಮಾಡಬೇಡಿ']
      }
    },
    whenToSeeDoctor: {
      en: ['No urination for more than 6-8 hours', 'Sunken eyes, parched dry tongue, skin stays pinched up', 'Extreme lethargy, confusion, or limpness in babies'],
      hi: ['6 से 8 घंटे से पेशाब बिल्कुल न आना', 'धंसी हुई आंखें, सूखा मुंह, चमड़ी खींचने पर वापस न जाना', 'अत्यधिक सुस्ती या बच्चे का निढाल पड़ जाना'],
      kn: ['6-8 ಗಂಟೆಗಳಿಂದ ಮೂತ್ರ ಬಾರದಿರುವುದು', 'ಬಾಯಿ ಸಂಪೂರ್ಣ ಒಣಗಿರುವುದು, ಚರ್ಮದ ಸುಕ್ಕು ಮರಳದಿರುವುದು', 'ಮಕ್ಕಳು ನಿತ್ರಾಣವಾಗಿ ಮಲಗುವುದು']
    }
  },

  // 22. Typhoid-like Fever
  {
    id: 'typhoid_like',
    name: {
      en: 'Typhoid-like Enteric Fever',
      hi: 'टाइफाइड जैसा मियादी बुखार',
      kn: 'ಟೈಫಾಯ್ಡ್ ತರಹದ ವಿಷಮಶೀತ ಜ್ವರ'
    },
    category: 'infectious',
    severity: 'moderate',
    primarySymptoms: ['fever', 'headache', 'stomach_pain', 'fatigue'],
    secondarySymptoms: ['loose_motions', 'vomiting'],
    summary: {
      en: 'Step-ladder rising fever with abdominal pain, headache, and severe weakness transmitted through contaminated food or water.',
      hi: 'दिन-प्रतिदिन बढ़ता जाने वाला बुखार, सिरदर्द, पेट में दर्द और भारी सुस्ती (दूषित पानी या खाने से)।',
      kn: 'ದಿನದಿಂದ ದಿನಕ್ಕೆ ಏರುವ ಜ್ವರ, ಹೊಟ್ಟೆ ನೋವು, ತಲೆನೋವು ಮತ್ತು ತೀವ್ರ ದೌರ್ಬಲ್ಯ.'
    },
    whatToDo: {
      en: [
        'Visit the PHC for a blood test (Widal / blood culture).',
        'Drink only boiled and filtered water.',
        'Eat light, soft, boiled foods: porridge, boiled potatoes, soft khichdi.'
      ],
      hi: [
        'सरकारी अस्पताल जाकर खून की जांच (विडाल टेस्ट) कराएं।',
        'केवल उबला हुआ और छना हुआ पानी पिएं।',
        'नरम और सुपाच्य खाना खाएं: दलिया, उबले आलू, मूंग दाल की खिचड़ी।'
      ],
      kn: [
        'ಆಸ್ಪತ್ರೆಗೆ ಭೇಟಿ ನೀಡಿ ರಕ್ತ ಪರೀಕ್ಷೆ (ವಿಡಾಲ್) ಮಾಡಿಸಿಕೊಳ್ಳಿ.',
        'ಕಾಯಿಸಿ ಆರಿಸಿದ ನೀರನ್ನು ಮಾತ್ರ ಕುಡಿಯಿರಿ.',
        'ಹಗುರವಾದ ಆಹಾರ ಸೇವಿಸಿ: ಗಂಜಿ, ಕಿಚಡಿ, ಬೇಯಿಸಿದ ಆಲೂಗಡ್ಡೆ.'
      ]
    },
    medicines: {
      en: [
        'Paracetamol for fever.',
        'Requires a doctor-prescribed course of antibiotics; complete the FULL course even after fever stops!'
      ],
      hi: [
        'बुखार के लिए पैरासिटामोल।',
        'डॉक्टर द्वारा लिखी गई एंटीबायोटिक का पूरा कोर्स 10-14 दिन तक खत्म करें (बीच में न छोड़ें)।'
      ],
      kn: [
        'ಜ್ವರಕ್ಕೆ ಪ್ಯಾರಾಸಿಟಮಾಲ್.',
        'ವೈದ್ಯರು ಸೂಚಿಸಿದ ಆಂಟಿಬಯೋಟಿಕ್ ಕೋರ್ಸ್ ಅನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ಮುಗಿಸಿ!'
      ]
    },
    precautions: {
      dos: {
        en: ['Boil drinking water', 'Wash hands with soap', 'Complete full medicine course'],
        hi: ['पीने का पानी उबालें', 'हाथ धोते रहें', 'दवा का पूरा कोर्स पूरा करें'],
        kn: ['ನೀರು ಕಾಯಿಸಿ ಕುಡಿಯಿರಿ', 'ಕೈ ತೊಳೆಯಿರಿ', 'ಔಷಧದ ಕೋರ್ಸ್ ಪೂರ್ಣಗೊಳಿಸಿ']
      },
      donts: {
        en: ['Do not eat raw unpeeled vegetables or street snacks', 'Do not stop medicine halfway'],
        hi: ['कच्ची सब्जियां, खुले फल या बाजार का खाना न खाएं', 'बुखार उतरने पर दवा बंद न करें'],
        kn: ['ಹೊರಗಿನ ಆಹಾರ ತಿನ್ನಬೇಡಿ', 'ಜ್ವರ ಇಳಿದ ತಕ್ಷಣ ಔಷಧ ನಿಲ್ಲಿಸಬೇಡಿ']
      }
    },
    whenToSeeDoctor: {
      en: ['Severe persistent abdominal pain or swelling', 'High fever for more than 5 days', 'Confusion or extreme weakness'],
      hi: ['पेट में तेज दर्द या पेट फूलना', '5 दिन से ज्यादा लगातार बुखार रहना', 'बेहोशी या भ्रम की स्थिति'],
      kn: ['ಹೊಟ್ಟೆ ಉಬ್ಬರ ಅಥವಾ ತೀವ್ರ ಹೊಟ್ಟೆ ನೋವು', '5 ದಿನಕ್ಕಿಂತ ಹೆಚ್ಚು ಜ್ವರ', 'ತೀವ್ರ ದೌರ್ಬಲ್ಯ']
    }
  },

  // 23. Anemia / Chronic Weakness
  {
    id: 'anemia_chronic',
    name: {
      en: 'Anemia / Nutritional Weakness',
      hi: 'खून की कमी (एनीमिया)',
      kn: 'ರಕ್ತಹೀನತೆ / ನಿಶ್ಯಕ್ತಿ (ಅನೀಮಿಯಾ)'
    },
    category: 'hematologic',
    severity: 'mild',
    primarySymptoms: ['fatigue', 'dizziness'],
    secondarySymptoms: ['breathlessness', 'headache'],
    summary: {
      en: 'Low hemoglobin causing chronic tiredness, pale tongue and eyes, breathlessness on climbing, and dizziness.',
      hi: 'शरीर में खून की कमी, जिससे हर वक्त थकान, चक्कर आना, आंखें-नाखून पीले या सफेद पड़ना और थोड़ा चलने पर सांस फूलना।',
      kn: 'ದೇಹದಲ್ಲಿ ರಕ್ತದ ಕೊರತೆ (ಹಿಮೋಗ್ಲೋಬಿನ್ ಕೊರತೆ), ಸದಾ ಆಯಾಸ, ತಲೆಸುತ್ತು, ಕಣ್ಣು-ಉಗುರು ಬಿಳುಚಿಕೊಳ್ಳುವುದು.'
    },
    whatToDo: {
      en: [
        'Get a simple hemoglobin (Hb) test at your sub-centre or PHC.',
        'Eat iron-rich foods: green leafy vegetables (palak, methi), jaggery (gud), chana, drumstick leaves, pomegranate.',
        'Collect free IFA (Iron Folic Acid) tablets from your village ASHA didi or Anganwadi.'
      ],
      hi: [
        'आशा दीदी या पीएचसी जाकर हीमोग्लोबिन (Hb) की मुफ्त जांच कराएं।',
        'आयरन से भरपूर खाना खाएं: पालक, मेथी, गुड़-चना, सहजन की पत्तियां, अनार।',
        'आशा दीदी या आंगनवाड़ी से नीली/लाल आयरन-फोलिक एसिड की गोलियां मुफ्त लें।'
      ],
      kn: [
        'ಆಶಾ ಕಾರ್ಯಕರ್ತೆ ಅಥವಾ ಪಿಎಚ್‌ಸಿಯಲ್ಲಿ ಹಿಮೋಗ್ಲೋಬಿನ್ ಪರೀಕ್ಷೆ ಮಾಡಿಸಿಕೊಳ್ಳಿ.',
        'ಕಬ್ಬಿಣಾಂಶವಿರುವ ಆಹಾರ ಸೇವಿಸಿ: ಪಾಲಕ್, ಮೆಂತ್ಯ, ಬೆಲ್ಲ-ಕಡಲೆ, ನುಗ್ಗೆ ಸೊಪ್ಪು, ದಾಳಿಂಬೆ.',
        'ಆಶಾ ಅಥವಾ ಅಂಗನವಾಡಿಯಿಂದ ಉಚಿತ ಐರನ್ ಮಾತ್ರೆಗಳನ್ನು ಪಡೆಯಿರಿ.'
      ]
    },
    medicines: {
      en: [
        'Iron & Folic Acid tablets (take with lemon water or amla; DO NOT take with milk or tea).',
        'Albendazole (400mg single dose) for deworming every 6 months.'
      ],
      hi: [
        'आयरन और फोलिक एसिड की गोली (नींबू पानी के साथ लें; दूध या चाय के साथ कभी न लें)।',
        'पेट के कीड़े मारने की दवा (एल्बेंडाजोल 400mg) हर 6 महीने में एक बार।'
      ],
      kn: [
        'ಕಬ್ಬಿಣಾಂಶದ ಮಾತ್ರೆಗಳು (ನಿಂಬೆ ಹಣ್ಣಿನ ರಸದೊಂದಿಗೆ ಸೇವಿಸಿ; ಹಾಲಿನೊಂದಿಗೆ ಬೇಡ).',
        'ಜಂತುಹುಳು ನಿವಾರಣೆಗೆ ಅಲ್ಬೆಂಡಜೋಲ್ (400mg).'
      ]
    },
    precautions: {
      dos: {
        en: ['Combine iron-rich food with vitamin C (amla, lemon)', 'Take regular iron supplements', 'Cook in cast iron utensils if possible'],
        hi: ['आयरन वाली चीजों के साथ नींबू या आंवला लें', 'नियमित रूप से दवा खाएं', 'लोहे की कढ़ाई में खाना पकाएं'],
        kn: ['ಕಬ್ಬಿಣಾಂಶದ ಜೊತೆ ನೆಲ್ಲಿಕಾಯಿ ಅಥವಾ ನಿಂಬೆ ಬಳಸಿ', 'ಕಬ್ಬಿಣದ ಪಾತ್ರೆಯಲ್ಲಿ ಅಡುಗೆ ಮಾಡಿ']
      },
      donts: {
        en: ['Do not drink tea immediately before or after meals (blocks iron absorption)', 'Do not take iron tablets with dairy milk'],
        hi: ['खाने के तुरंत बाद या पहले चाय न पिएं (चाय खून बनने से रोकती है)', 'दूध के साथ आयरन की गोली न लें'],
        kn: ['ಊಟದ ಮುನ್ನ ಅಥವಾ ತಕ್ಷಣ ಚಹಾ ಕುಡಿಯಬೇಡಿ', 'ಹಾಲಿನೊಂದಿಗೆ ಐರನ್ ಮಾತ್ರೆ ಬೇಡ']
      }
    },
    whenToSeeDoctor: {
      en: ['Breathlessness even at rest', 'Swelling in both feet and face', 'Chest pain or fainting spells'],
      hi: ['बैठे-बैठे भी सांस फूलने लगे', 'दोनों पैरों और चेहरे पर सूजन आना', 'सीने में दर्द या चक्कर खाकर गिरना'],
      kn: ['ಕುಳಿತಿರುವಾಗಲೂ ಉಸಿರಾಟದ ತೊಂದರೆ', 'ಮುಖ ಮತ್ತು ಪಾದಗಳಲ್ಲಿ ಊತ', 'ಎದೆ ನೋವು ಅಥವಾ ಮೂರ್ಛೆ']
    }
  },

  // 24. Hypertension Warning (High BP)
  {
    id: 'hypertension_warning',
    name: {
      en: 'High Blood Pressure Warning',
      hi: 'हाई ब्लड प्रेशर (उच्च रक्तचाप) चेतावनी',
      kn: 'ಅಧಿಕ ರಕ್ತದೊತ್ತಡದ ಮುನ್ನೆಚ್ಚರಿಕೆ (ಹೈ ಬಿಪಿ)'
    },
    category: 'cardiovascular',
    severity: 'moderate',
    primarySymptoms: ['headache', 'dizziness'],
    secondarySymptoms: ['chest_pain', 'fatigue'],
    summary: {
      en: 'Warning signs of elevated blood pressure causing occipital (back of head) heaviness, neck stiffness, and dizziness.',
      hi: 'सिर के पिछले हिस्से में भारीपन, चक्कर आना और गर्दन में खिंचाव; यह बढ़े हुए बीपी का संकेत हो सकता है।',
      kn: 'ತಲೆಯ ಹಿಂಭಾಗದಲ್ಲಿ ಭಾರ, ತಲೆಸುತ್ತು ಮತ್ತು ಕುತ್ತಿಗೆ ಬಿಗಿತ; ಇದು ಬಿಪಿ ಹೆಚ್ಚಾಗಿರುವ ಲಕ್ಷಣ.'
    },
    whatToDo: {
      en: [
        'Visit your village Health and Wellness Centre (HWC/PHC) today to check your Blood Pressure reading.',
        'Sit and rest quietly for 15 minutes before measuring.',
        'Cut down on salt intake immediately.'
      ],
      hi: [
        'आज ही अपने गांव के आरोग्य मंदिर / PHC जाकर अपना ब्लड प्रेशर (बीपी) नपवाएं।',
        'बीपी नपवाने से पहले 15 मिनट शांत बैठें।',
        'खाने में नमक की मात्रा तुरंत कम करें।'
      ],
      kn: [
        'ಇಂದೇ ನಿಮ್ಮ ಗ್ರಾಮದ ಪ್ರಾಥಮಿಕ ಆರೋಗ್ಯ ಕೇಂದ್ರಕ್ಕೆ ಭೇಟಿ ನೀಡಿ ಬಿಪಿ ಪರೀಕ್ಷಿಸಿಕೊಳ್ಳಿ.',
        'ಪರೀಕ್ಷೆಗೆ ಮುನ್ನ 15 ನಿಮಿಷ ಶಾಂತವಾಗಿ ಕುಳಿತುಕೊಳ್ಳಿ.',
        'ಉಪ್ಪಿನ ಬಳಕೆಯನ್ನು ಕಡಿಮೆ ಮಾಡಿ.'
      ]
    },
    medicines: {
      en: [
        'DO NOT take or stop BP medicines without a doctor measuring your current pressure.',
        'Regular prescription BP medication from PHC if diagnosed.'
      ],
      hi: [
        'बिना डॉक्टर के बीपी की दवा शुरू या बंद न करें।',
        'जांच के बाद डॉक्टर द्वारा दी गई बीपी की गोली रोज नियम से लें।'
      ],
      kn: [
        'ವೈದ್ಯರ ಸಲಹೆಯಿಲ್ಲದೆ ಬಿಪಿ ಮಾತ್ರೆಗಳನ್ನು ನಿಲ್ಲಿಸಬೇಡಿ ಅಥವಾ ಪ್ರಾರಂಭಿಸಬೇಡಿ.'
      ]
    },
    precautions: {
      dos: {
        en: ['Reduce table salt in cooking and pickles', 'Walk 30 minutes daily', 'Manage mental stress'],
        hi: ['सब्जी में नमक कम डालें और पापड़-अचार से बचें', 'रोजाना 30 मिनट टहलें', 'तनाव कम रखें'],
        kn: ['ಅಡುಗೆಯಲ್ಲಿ ಉಪ್ಪು ಮತ್ತು ಉಪ್ಪಿನಕಾಯಿ ಕಡಿಮೆ ಮಾಡಿ', 'ಪ್ರತಿದಿನ 30 ನಿಮಿಷ ನಡೆಯಿರಿ']
      },
      donts: {
        en: ['Avoid tobacco, gutka, smoking, and alcohol', 'Do not add extra raw salt to your plate'],
        hi: ['तंबाकू, गुटखा, बीड़ी और शराब तुरंत छोड़ें', 'थाली में ऊपर से कच्चा नमक कभी न डालें'],
        kn: ['ತಂಬಾಕು, ಗುಟ್ಕಾ, ಸಿಗರೇಟು ಮತ್ತು ಮದ್ಯಪಾನ ತ್ಯಜಿಸಿ', 'ಹೆಚ್ಚುವರಿ ಉಪ್ಪು ಬಳಸಬೇಡಿ']
      }
    },
    whenToSeeDoctor: {
      en: ['Systolic BP above 180 or Diastolic above 110 (CRISIS)', 'Chest heaviness or shortness of breath', 'Sudden blurred vision or facial weakness'],
      hi: ['बीपी 180/110 से ऊपर पहुंच जाए', 'सीने में जकड़न या सांस फूलना', 'अचानक आंखों से धुंधला दिखना या सिर में असहनीय दर्द'],
      kn: ['ಬಿಪಿ 180/110 ಕ್ಕಿಂತ ಹೆಚ್ಚಿದ್ದರೆ', 'ಎದೆ ಭಾರ ಅಥವಾ ಉಸಿರಾಟದ ತೊಂದರೆ', 'ದೃಷ್ಟಿ ಮಂದವಾಗುವುದು ಅಥವಾ ಮುಖದ ವಕ್ರತೆ']
    }
  },

  // 25. Persistent Chest / Chronic Cough (TB / Lung Warning)
  {
    id: 'tb_chronic_cough_warning',
    name: {
      en: 'Tuberculosis (TB) / Chronic Lung Check-up Notice',
      hi: 'टीबी (तपेदिक) / फेफड़ों की जांच चेतावनी',
      kn: 'ಕ್ಷಯರೋಗ (ಟಿಬಿ) / ಶ್ವಾಸಕೋಶ ತಪಾಸಣೆ ಮುನ್ನೆಚ್ಚರಿಕೆ'
    },
    category: 'respiratory',
    severity: 'moderate',
    primarySymptoms: ['cough_persistent'],
    secondarySymptoms: ['fever', 'unexplained_weight_loss', 'night_sweats', 'cough_blood'],
    summary: {
      en: 'Cough lasting more than 2-3 weeks, low-grade evening fever, night sweats, and weight loss require urgent sputum testing for TB.',
      hi: '2-3 हफ्ते से अधिक खांसी, शाम को हल्का बुखार, रात में पसीना और वजन घटना टीबी का संकेत हो सकता है।',
      kn: '2-3 ವಾರಗಳಿಗಿಂತ ಹೆಚ್ಚು ಕೆಮ್ಮು, ಸಂಜೆ ಜ್ವರ, ರಾತ್ರಿ ಬೆವರುವುದು ಮತ್ತು ತೂಕ ಇಳಿಕೆ ಟಿಬಿ ಲಕ್ಷಣವಾಗಿರಬಹುದು.'
    },
    whatToDo: {
      en: [
        'Visit your government PHC / DMC (Direct Microscopy Centre) for a FREE Sputum (balgam) test and Chest X-ray.',
        'Cover your mouth when coughing to protect your family.',
        'Govt provides 100% FREE TB medicine and Rs 500/month nutritional support (Nikshay Poshan Yojana).'
      ],
      hi: [
        'तुरंत सरकारी अस्पताल (PHC) जाकर बलगम की मुफ्त जांच और छाती का एक्स-रे कराएं।',
        'खांसते समय मुंह पर कपड़ा रखें ताकि परिवार सुरक्षित रहे।',
        'सरकारी अस्पताल में टीबी का पूरा इलाज बिल्कुल मुफ्त है और पोषण के लिए ₹500/माह भी मिलते हैं।'
      ],
      kn: [
        'ಸರ್ಕಾರಿ ಪಿಎಚ್‌ಸಿಗೆ ಭೇಟಿ ನೀಡಿ ಉಚಿತ ಕಫ ಪರೀಕ್ಷೆ ಮತ್ತು ಎದೆಯ ಎಕ್ಸ್-ರೇ ಮಾಡಿಸಿಕೊಳ್ಳಿ.',
        'ಕೆಮ್ಮುವಾಗ ಬಟ್ಟೆ ಅಡ್ಡ ಹಿಡಿಯಿರಿ.',
        'ಸರ್ಕಾರಿ ಆಸ್ಪತ್ರೆಯಲ್ಲಿ ಟಿಬಿಗೆ ಸಂಪೂರ್ಣ ಉಚಿತ ಚಿಕಿತ್ಸೆ ಮತ್ತು ಪೌಷ್ಟಿಕ ಆಹಾರಕ್ಕೆ ಧನಸಹಾಯ ಲಭ್ಯ.'
      ]
    },
    medicines: {
      en: [
        'DO NOT take random antibiotics; TB requires a specific government course (DOTS) under medical supervision.',
        'Paracetamol for fever.'
      ],
      hi: [
        'दुकान से खरीदकर एंटीबायोटिक न खाएं; टीबी की दवा (डॉट कोर्स) सरकारी अस्पताल से ही लें।'
      ],
      kn: [
        'ಅನಗತ್ಯ ಔಷಧಿ ಸೇವಿಸಬೇಡಿ; ಸರ್ಕಾರಿ ಡಾಟ್ಸ್ (DOTS) ಚಿಕಿತ್ಸೆಯನ್ನು ವೈದ್ಯರ ಮೇಲ್ವಿಚಾರಣೆಯಲ್ಲಿ ಪಡೆಯಿರಿ.'
      ]
    },
    precautions: {
      dos: {
        en: ['Get tested immediately', 'Open windows for sunlight and ventilation', 'Eat nutritious high-protein food'],
        hi: ['तुरंत बलगम की जांच कराएं', 'कमरे की खिड़कियां खुली रखें ताकि धूप और हवा आए', 'दाल, दूध और पौष्टिक खाना खाएं'],
        kn: ['ತಕ್ಷಣ ಕಫ ಪರೀಕ್ಷೆ ಮಾಡಿಸಿ', 'ಕೋಣೆಯಲ್ಲಿ ಗಾಳಿ-ಬೆಳಕು ಇರಲಿ', 'ಪೌಷ್ಟಿಕ ಆಹಾರ ಸೇವಿಸಿ']
      },
      donts: {
        en: ['Do not spit in open areas', 'Do not hide symptoms or delay testing', 'Do not stop medicine halfway if diagnosed'],
        hi: ['खुले में न थूकें', 'लक्षणों को न छिपाएं', 'दवा बीच में कभी न छोड़ें'],
        kn: ['ತೆರೆದ ಜಾಗದಲ್ಲಿ ಉಗುಳಬೇಡಿ', 'ಲಕ್ಷಣಗಳನ್ನು ಮುಚ್ಚಿಡಬೇಡಿ', 'ಚಿಕಿತ್ಸೆಯನ್ನು ಅರ್ಧಕ್ಕೆ ನಿಲ್ಲಿಸಬೇಡಿ']
      }
    },
    whenToSeeDoctor: {
      en: ['Coughing up fresh blood', 'Severe chest pain and breathlessness', 'Rapid unexplained weight loss'],
      hi: ['खांसी में ताजा खून आना', 'सीने में तेज दर्द और सांस फूलना', 'तेजी से वजन घटना'],
      kn: ['ಕೆಮ್ಮಿನಲ್ಲಿ ರಕ್ತ ಬರುವುದು', 'ತೀವ್ರ ಎದೆ ನೋವು ಮತ್ತು ಉಸಿರಾಟದ ತೊಂದರೆ', 'ತೂಕ ತ್ವರಿತವಾಗಿ ಇಳಿಯುವುದು']
    }
  },

  // 26. Breast Warning / Early Screening Guidance
  {
    id: 'breast_warning_guidance',
    name: {
      en: 'Breast Health Warning & Early Screening Guidance',
      hi: 'स्तन स्वास्थ्य चेतावनी व शुरुआती जांच मार्गदर्शन',
      kn: 'ಸ್ತನ ಆರೋಗ್ಯ ಮುನ್ನೆಚ್ಚರಿಕೆ ಮತ್ತು ತಪಾಸಣೆ ಮಾರ್ಗದರ್ಶನ'
    },
    category: 'early_warning',
    severity: 'moderate',
    primarySymptoms: ['breast_lump', 'breast_skin_changes'],
    secondarySymptoms: ['unexplained_weight_loss'],
    summary: {
      en: 'Any persistent painless lump in the breast or armpit, skin dimpling, or nipple discharge requires clinical breast examination at the PHC.',
      hi: 'स्तन या कांख में कोई भी बिना दर्द वाली गांठ, त्वचा में गड्ढा या निप्पल से स्राव होने पर डॉक्टर से तुरंत जांच कराना जरूरी है।',
      kn: 'ಸ್ತನ ಅಥವಾ ಕಂಕುಳಲ್ಲಿ ನೋವಿಲ್ಲದ ಗಂಟು, ಚರ್ಮದ ಸುಕ್ಕು ಅಥವಾ ತೊಟ್ಟಿನಿಂದ ದ್ರವ ಬಂದರೆ ತಕ್ಷಣ ಪರೀಕ್ಷೆ ಅಗತ್ಯ.'
    },
    whatToDo: {
      en: [
        'Visit your female Medical Officer or ASHA didi at the Primary Health Centre for a FREE Clinical Breast Examination (CBE).',
        'Remember: 8 out of 10 breast lumps are benign (NOT cancer), but prompt testing gives complete peace of mind.',
        'Perform a monthly breast self-exam 5 days after your period ends.'
      ],
      hi: [
        'नजदीकी प्राथमिक स्वास्थ्य केंद्र पर जाकर महिला डॉक्टर या आशा दीदी से स्तन की मुफ्त जांच कराएं।',
        'याद रखें: 10 में से 8 गांठें साधारण होती हैं (कैंसर नहीं), लेकिन समय पर जांच कराने से जान बचती है।',
        'माहवारी खत्म होने के 5 दिन बाद हर महीने खुद स्तन की जांच करें।'
      ],
      kn: [
        'ಪ್ರಾಥಮಿಕ ಆರೋಗ್ಯ ಕೇಂದ್ರದಲ್ಲಿ ಮಹಿಳಾ ವೈದ್ಯರು ಅಥವಾ ಆಶಾ ಕಾರ್ಯಕರ್ತೆಯಿಂದ ಉಚಿತ ತಪಾಸಣೆ ಮಾಡಿಸಿಕೊಳ್ಳಿ.',
        'ನೆನಪಿಡಿ: 10 ರಲ್ಲಿ 8 ಗಂಟುಗಳು ಸಾಮಾನ್ಯವಾಗಿದ್ದು ಕ್ಯಾನ್ಸರ್ ಆಗಿರುವುದಿಲ್ಲ, ಆದರೆ ಆರಂಭಿಕ ಪರೀಕ್ಷೆ ಮುಖ್ಯ.',
        'ಪ್ರತಿ ತಿಂಗಳು ಮುಟ್ಟಿನ ನಂತರ ಸ್ವಯಂ ತಪಾಸಣೆ ಮಾಡಿಕೊಳ್ಳಿ.'
      ]
    },
    medicines: {
      en: [
        'No medicines can dissolve lumps without a proper medical diagnosis and biopsy/ultrasound.'
      ],
      hi: [
        'बिना डॉक्टर की जांच के किसी भी गांठ को गलाने की कोई दवा न लें; पहले डॉक्टर से जांच कराएं।'
      ],
      kn: [
        'ವೈದ್ಯಕೀಯ ತಪಾಸಣೆಯಿಲ್ಲದೆ ಯಾವುದೇ ಔಷಧಿ ತೆಗೆದುಕೊಳ್ಳಬೇಡಿ.'
      ]
    },
    precautions: {
      dos: {
        en: ['Seek medical examination promptly', 'Learn breast self-examination steps', 'Attend govt screening camps'],
        hi: ['तुरंत महिला डॉक्टर से जांच कराएं', 'स्वयं जांच करने का सही तरीका सीखें', 'सरकारी जांच कैंप में जाएं'],
        kn: ['ತಕ್ಷಣ ಮಹಿಳಾ ವೈದ್ಯರಿಂದ ಪರೀಕ್ಷೆ', 'ಸ್ವಯಂ ತಪಾಸಣೆ ಕಲಿಯಿರಿ']
      },
      donts: {
        en: ['Do not ignore a painless lump thinking "there is no pain"', 'Do not press or squeeze the lump vigorously'],
        hi: ['यह सोचकर गांठ को अनदेखा न करें कि "दर्द नहीं हो रहा"', 'गांठ को जोर से न दबाएं'],
        kn: ['ನೋವಿಲ್ಲ ಎಂದು ಗಂಟನ್ನು ನಿರ್ಲಕ್ಷಿಸಬೇಡಿ', 'ಗಂಟನ್ನು ಜೋರಾಗಿ ಒತ್ತಬೇಡಿ']
      }
    },
    whenToSeeDoctor: {
      en: ['Lump is firm, fixed, or growing', 'Bloody or clear discharge from nipple', 'Skin looks like orange peel (dimpled/red)'],
      hi: ['गांठ सख्त हो, हिल न रही हो या बढ़ रही हो', 'निप्पल से खून या पानी जैसा स्राव', 'स्तन की त्वचा संतरे के छिलके जैसी गड्ढेदार होना'],
      kn: ['ಗಂಟು ಗಟ್ಟಿಯಾಗಿದ್ದರೆ ಅಥವಾ ಬೆಳೆಯುತ್ತಿದ್ದರೆ', 'ತೊಟ್ಟಿನಿಂದ ರಕ್ತಸ್ರಾವ', 'ಚರ್ಮ ಕಿತ್ತಳೆ ಹಣ್ಣಿನ ಸಿಪ್ಪೆಯಂತೆ ಬದಲಾದರೆ']
    }
  },

  // 27. Oral Warning / Pre-Cancer Notice
  {
    id: 'oral_precancer_warning',
    name: {
      en: 'Oral Health Pre-Cancer / Ulcer Warning',
      hi: 'मुंह का छाला / प्री-कैंसर चेतावनी (तंबाकू संबंधी)',
      kn: 'ಬಾಯಿಯ ಹುಣ್ಣು / ಕ್ಯಾನ್ಸರ್ ಮುನ್ನೆಚ್ಚರಿಕೆ'
    },
    category: 'early_warning',
    severity: 'moderate',
    primarySymptoms: ['mouth_ulcer_persistent'],
    secondarySymptoms: ['neck_lump', 'unexplained_weight_loss'],
    summary: {
      en: 'Any mouth ulcer, sore, white patch (leukoplakia), or red patch that does NOT heal within 2 to 3 weeks, especially with tobacco or gutka use.',
      hi: 'मुंह या जीभ का ऐसा छाला, सफेद या लाल दाग जो 2 से 3 हफ्ते में ठीक न हो, विशेषकर तंबाकू या गुटखा खाने वालों में।',
      kn: 'ಬಾಯಿಯ ಹುಣ್ಣು, ಬಿಳಿ ಅಥವಾ ಕೆಂಪು ಕಲೆ 2-3 ವಾರಗಳಲ್ಲಿ ವಾಸಿಯಾಗದಿದ್ದರೆ, ವಿಶೇಷವಾಗಿ ತಂಬಾಕು/ಗುಟ್ಕಾ ಸೇವಿಸುವವರಲ್ಲಿ.'
    },
    whatToDo: {
      en: [
        'STOP all gutka, khaini, pan masala, bidi, and tobacco IMMEDIATELY.',
        'Visit your government dentist or medical officer at the PHC for a visual oral cavity check.',
        'Oral screening is completely free and painless.'
      ],
      hi: [
        'गुटखा, खैनी, पान मसाला, बीड़ी और तंबाकू तुरंत और पूरी तरह बंद करें।',
        'सरकारी अस्पताल के डेंटिस्ट या डॉक्टर को मुंह का छाला दिखाएं।',
        'मुंह की जांच बिल्कुल मुफ्त और दर्द-रहित होती है।'
      ],
      kn: [
        'ಗುಟ್ಕಾ, ಖೈನಿ, ಪಾನ್ ಮಸಾಲಾ, ಬೀಡಿ ತಕ್ಷಣ ಸಂಪೂರ್ಣವಾಗಿ ನಿಲ್ಲಿಸಿ.',
        'ದಂತ ವೈದ್ಯರು ಅಥವಾ ಪಿಎಚ್‌ಸಿ ವೈದ್ಯರಿಗೆ ತೋರಿಸಿ.',
        'ಬಾಯಿಯ ತಪಾಸಣೆ ಸಂಪೂರ್ಣ ಉಚಿತವಾಗಿದೆ.'
      ]
    },
    medicines: {
      en: [
        'Warm salt water mouth rinses.',
        'Vitamin B-complex / Riboflavin supplements from the dispensary.',
        'Biopsy or clinical review required for non-healing patches.'
      ],
      hi: [
        'गुनगुने नमक के पानी से कुल्ला करें।',
        'विटामिन बी-कॉम्प्लेक्स की गोली लें।',
        'छाला ठीक न होने पर अस्पताल में बायोप्सी कराएं।'
      ],
      kn: [
        'ಬಿಸಿ ಉಪ್ಪು ನೀರಿನಿಂದ ಬಾಯಿ ಮುಕ್ಕಳಿಸಿ.',
        'ವಿಟಮಿನ್ ಬಿ-ಕಾಂಪ್ಲೆಕ್ಸ್ ಮಾತ್ರೆಗಳು.',
        'ಗುಣವಾಗದಿದ್ದರೆ ಬಯಾಪ್ಸಿ ಪರೀಕ್ಷೆ ಅಗತ್ಯ.'
      ]
    },
    precautions: {
      dos: {
        en: ['Inspect your mouth in a mirror under good light every month', 'Quit tobacco today', 'Maintain good dental hygiene'],
        hi: ['महीने में एक बार आईने में टॉर्च की रोशनी से मुंह के अंदर देखें', 'तंबाकू छोड़ें', 'दांतों की सफाई रखें'],
        kn: ['ಪ್ರತಿ ತಿಂಗಳು ಕನ್ನಡಿಯ ಮುಂದೆ ಬಾಯಿಯ ಒಳಭಾಗ ಪರೀಕ್ಷಿಸಿ', 'ತಂಬಾಕು ತ್ಯಜಿಸಿ']
      },
      donts: {
        en: ['DO NOT place tobacco or gutka quids in the cheek', 'Do not ignore ulcers lasting over 3 weeks'],
        hi: ['गाल में तंबाकू या गुटखा दबाकर न रखें', '3 हफ्ते से पुराने छाले को मामूली न समझें'],
        kn: ['ಕೆನ್ನೆಯಲ್ಲಿ ತಂಬಾಕು ಇಟ್ಟುಕೊಳ್ಳಬೇಡಿ', '3 ವಾರ ಮೀರಿದ ಹುಣ್ಣನ್ನು ನಿರ್ಲಕ್ಷಿಸಬೇಡಿ']
      }
    },
    whenToSeeDoctor: {
      en: ['Mouth ulcer has hard raised borders or bleeds when touched', 'Difficulty opening mouth or sticking tongue out', 'Lump in neck accompanied by mouth sore'],
      hi: ['छाले के किनारे सख्त हो गए हों या छूने पर खून आए', 'मुंह पूरा खोलने या जीभ बाहर निकालने में परेशानी', 'गले में गिल्टी या गांठ के साथ मुंह में घाव'],
      kn: ['ಹುಣ್ಣಿನಿಂದ ರಕ್ತ ಬಂದರೆ ಅಥವಾ ಗಟ್ಟಿಯಾಗಿದ್ದರೆ', 'ಬಾಯಿ ತೆರೆಯಲು ಕಷ್ಟವಾದರೆ', 'ಕುತ್ತಿಗೆಯಲ್ಲಿ ಗಂಟು ಕಾಣಿಸಿಕೊಂಡರೆ']
    }
  }
];

export const BODY_PARTS_MAPPING: Record<string, { label: Record<string, string>; symptomIds: string[] }> = {
  head: {
    label: { en: 'Head & Face', hi: 'सिर और चेहरा', kn: 'ತಲೆ ಮತ್ತು ಮುಖ' },
    symptomIds: ['headache', 'severe_sudden_headache', 'dizziness', 'facial_droop_speech']
  },
  throat: {
    label: { en: 'Throat & Mouth', hi: 'गला और मुंह', kn: 'ಗಂಟಲು ಮತ್ತು ಬಾಯಿ' },
    symptomIds: ['mouth_ulcer_persistent', 'neck_lump', 'cough_persistent']
  },
  chest: {
    label: { en: 'Chest & Lungs', hi: 'छाती और फेफड़े', kn: 'ಎದೆ ಮತ್ತು ಶ್ವಾಸಕೋಶ' },
    symptomIds: ['chest_pain', 'breathlessness', 'cough_persistent', 'cough_blood']
  },
  breast: {
    label: { en: 'Breast & Underarm', hi: 'स्तन और कांख', kn: 'ಸ್ತನ ಮತ್ತು ಕಂಕುಳು' },
    symptomIds: ['breast_lump', 'breast_skin_changes']
  },
  stomach: {
    label: { en: 'Stomach & Belly', hi: 'पेट और नाभि', kn: 'ಹೊಟ್ಟೆ' },
    symptomIds: ['stomach_pain', 'severe_right_stomach_pain', 'vomiting', 'loose_motions', 'severe_acidity', 'unexplained_weight_loss']
  },
  back: {
    label: { en: 'Back & Spine', hi: 'पीठ और कमर', kn: 'ಬೆನ್ನು ಮತ್ತು ಸೊಂಟ' },
    symptomIds: ['back_pain', 'joint_swelling_pain']
  },
  arms: {
    label: { en: 'Arms & Hands', hi: 'हाथ और कंधे', kn: 'ಕೈಗಳು' },
    symptomIds: ['joint_swelling_pain', 'minor_cut_wound', 'burn_injury', 'fatigue', 'snake_bite']
  },
  legs: {
    label: { en: 'Legs & Feet', hi: 'पैर और घुटने', kn: 'ಕಾಲುಗಳು ಮತ್ತು ಪಾದ' },
    symptomIds: ['joint_swelling_pain', 'minor_cut_wound', 'snake_bite', 'fatigue']
  },
  skin: {
    label: { en: 'Skin & Rash', hi: 'त्वचा और चकत्ते', kn: 'ಚರ್ಮ ಮತ್ತು ಗುಳ್ಳೆಗಳು' },
    symptomIds: ['skin_rash', 'minor_cut_wound', 'burn_injury', 'night_sweats', 'fever']
  },
  urinary: {
    label: { en: 'Urinary & Pelvis', hi: 'पेशाब और पेड़ू', kn: 'ಮೂತ್ರನಾಳ ಮತ್ತು ಶ್ರೋಣಿ' },
    symptomIds: ['burning_urination', 'blood_in_urine', 'abnormal_bleeding_women']
  }
};
