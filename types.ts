
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

export const MAX_STORY_PAGES = 10;
export const BACK_COVER_PAGE = 11;
export const TOTAL_PAGES = 11;
export const INITIAL_PAGES = 2;
export const GATE_PAGE = 2;
export const BATCH_SIZE = 6;
export const DECISION_PAGES = [3];

export const GENRES = ["Classic Horror", "Superhero Action", "Dark Sci-Fi", "High Fantasy", "Neon Noir Detective", "Wasteland Apocalypse", "Lighthearted Comedy", "Teen Drama / Slice of Life", "Custom"];
export const TONES = [
    "ACTION-HEAVY (Short, punchy dialogue. Focus on kinetics.)",
    "INNER-MONOLOGUE (Heavy captions revealing thoughts.)",
    "QUIPPY (Characters use humor as a defense mechanism.)",
    "OPERATIC (Grand, dramatic declarations and high stakes.)",
    "CASUAL (Natural dialogue, focus on relationships/gossip.)",
    "WHOLESOME (Warm, gentle, optimistic.)"
];

export const LANGUAGES = [
    { code: 'en-US', name: 'English (US)' },
    { code: 'ar-EG', name: 'Arabic (Egypt)' },
    { code: 'de-DE', name: 'German (Germany)' },
    { code: 'es-MX', name: 'Spanish (Mexico)' },
    { code: 'fr-FR', name: 'French (France)' },
    { code: 'hi-IN', name: 'Hindi (India)' },
    { code: 'id-ID', name: 'Indonesian (Indonesia)' },
    { code: 'it-IT', name: 'Italian (Italy)' },
    { code: 'ja-JP', name: 'Japanese (Japan)' },
    { code: 'ko-KR', name: 'Korean (South Korea)' },
    { code: 'pt-BR', name: 'Portuguese (Brazil)' },
    { code: 'ru-RU', name: 'Russian (Russia)' },
    { code: 'th-TH', name: 'Thai (Thailand)' },
    { code: 'ua-UA', name: 'Ukrainian (Ukraine)' },
    { code: 'vi-VN', name: 'Vietnamese (Vietnam)' },
    { code: 'zh-CN', name: 'Chinese (China)' }
];

export type UILanguage = 'en' | 'th';

export const UI_STRINGS = {
  en: {
    secretIdentity: "Secret Identity Required!",
    haltCitizen: "Halt, Citizen! To access the infinite multiverse (and generate these amazing comics), you need a",
    paidKey: "Paid API Key",
    missionBriefing: "Mission Briefing",
    billingDocs: "Read the Billing Docs",
    unlock: "Unlock The Multiverse",
    castTitle: "1. THE CAST",
    storyTitle: "2. THE STORY",
    heroLabel: "HERO (REQUIRED)",
    costarLabel: "CO-STAR (OPTIONAL)",
    ready: "✓ READY",
    replace: "REPLACE",
    uploadHero: "UPLOAD HERO",
    uploadCostar: "UPLOAD CO-STAR",
    policy: "The Prohibited Use Policy applies. Do not generate content that infringes on others' privacy rights.",
    genreLabel: "GENRE",
    languageLabel: "STORY LANGUAGE",
    premiseLabel: "STORY PLOT / PREMISE",
    premisePlaceholder: "Enter your story idea... (Optional)",
    novelMode: "NOVEL MODE (Rich Dialogue)",
    launch: "START ADVENTURE!",
    launching: "LAUNCHING...",
    remix: "REMIX IDEA:",
    printing: "PRINTING...",
    readIssue: "READ ISSUE #1",
    download: "DOWNLOAD ISSUE",
    createNew: "CREATE NEW ISSUE",
    drivesYou: "What drives you?",
    inking: "INKING PAGE...",
    errorTitle: "ERROR",
    errorDesc: "Something went wrong. Please try again.",
  },
  th: {
    secretIdentity: "ต้องการตัวตนลับ!",
    haltCitizen: "ช้าก่อนพลเมือง! เพื่อเข้าสู่พหุจักรวาล (และสร้างการ์ตูนสุดเจ๋งเหล่านี้) คุณต้องมี",
    paidKey: "คีย์ API แบบชำระเงิน",
    missionBriefing: "สรุปภารกิจ",
    billingDocs: "อ่านเอกสารการชำระเงิน",
    unlock: "ปลดล็อกพหุจักรวาล",
    castTitle: "1. ตัวละคร",
    storyTitle: "2. เนื้อเรื่อง",
    heroLabel: "ฮีโร่ (จำเป็น)",
    costarLabel: "ดาราร่วม (ไม่จำเป็น)",
    ready: "✓ พร้อม",
    replace: "เปลี่ยน",
    uploadHero: "อัปโหลดฮีโร่",
    uploadCostar: "อัปโหลดดาราร่วม",
    policy: "ใช้นโยบายการใช้งานที่ต้องห้าม ห้ามสร้างเนื้อหาที่ละเมิดสิทธิส่วนบุคคลของผู้อื่น",
    genreLabel: "แนวเรื่อง",
    languageLabel: "ภาษาของเรื่อง",
    premiseLabel: "โครงเรื่อง / พล็อต",
    premisePlaceholder: "ใส่ไอเดียเรื่องราวของคุณ... (ไม่บังคับ)",
    novelMode: "โหมดนิยาย (บทสนทนาเข้มข้น)",
    launch: "เริ่มการผจญภัย!",
    launching: "กำลังเริ่ม...",
    remix: "ไอเดียรีมิกซ์:",
    printing: "กำลังพิมพ์...",
    readIssue: "อ่านฉบับที่ #1",
    download: "ดาวน์โหลดฉบับนี้",
    createNew: "สร้างฉบับใหม่",
    drivesYou: "อะไรขับเคลื่อนคุณ?",
    inking: "กำลังลงหมึก...",
    errorTitle: "ข้อผิดพลาด",
    errorDesc: "เกิดข้อผิดพลาด โปรดลองอีกครั้ง",
  }
};

export const GENRE_LABELS: Record<string, { en: string, th: string }> = {
    "Classic Horror": { en: "Classic Horror", th: "สยองขวัญคลาสสิก" },
    "Superhero Action": { en: "Superhero Action", th: "แอ็คชั่นซูเปอร์ฮีโร่" },
    "Dark Sci-Fi": { en: "Dark Sci-Fi", th: "ไซไฟมืดมน" },
    "High Fantasy": { en: "High Fantasy", th: "แฟนตาซีฟอร์มยักษ์" },
    "Neon Noir Detective": { en: "Neon Noir Detective", th: "นักสืบนีออนนัวร์" },
    "Wasteland Apocalypse": { en: "Wasteland Apocalypse", th: "วันสิ้นโลกแดนรกร้าง" },
    "Lighthearted Comedy": { en: "Lighthearted Comedy", th: "ตลกเบาสมอง" },
    "Teen Drama / Slice of Life": { en: "Teen Drama / Slice of Life", th: "ดราม่าวัยรุ่น / ชีวิตประจำวัน" },
    "Custom": { en: "Custom", th: "กำหนดเอง" }
};

export interface ComicFace {
  id: string;
  type: 'cover' | 'story' | 'back_cover';
  imageUrl?: string;
  narrative?: Beat;
  choices: string[];
  resolvedChoice?: string;
  isLoading: boolean;
  pageIndex?: number;
  isDecisionPage?: boolean;
}

export interface Beat {
  caption?: string;
  dialogue?: string;
  scene: string;
  choices: string[];
  focus_char: 'hero' | 'friend' | 'other';
}

export interface Persona {
  base64: string;
  desc: string;
}
