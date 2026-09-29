/** Central registry of static assets. Components import from here, never hardcode paths. */
const a = (path: string) => `/assets/${path}`;
/** 3D art: a picture plus the alpha mask used to tint it (see the Ornament component). */
const art = (name: string) => ({ art: a(`${name}.png`), mask: a(`${name}-mask.png`) });

export const images = {
  brand: { logoMark: a("brand/logo-mark.svg") },
  icons: {
    search: a("icons/search.svg"),
    bag: a("icons/bag.svg"),
    star: a("icons/star.svg"),
    starOutlined: a("icons/star-outlined.svg"),
    level: a("icons/level.svg"),
    checkCircle: a("icons/check-circle.svg"),
    facebook: a("icons/facebook.svg"),
    google: a("icons/google.svg"),
  },
  hero: { grid: a("hero/grid.svg"), circle: a("hero/circle.svg"), student: a("hero/student.png") },
  avatars: {
    students: [1, 2, 3, 4, 5, 6, 7].map((n) => a(`avatars/student-${n}.png`)) as readonly string[],
    badge: a("avatars/badge.svg"),
    badgeDark: a("avatars/badge-dark.svg"),
  },
  ornaments: {
    springA: art("ornaments/spring-a"),
    springBLime: { art: a("ornaments/spring-b.png"), mask: a("ornaments/spring-b-lime-mask.png") },
    springBWhite: { art: a("ornaments/spring-b.png"), mask: a("ornaments/spring-b-white-mask.png") },
    ring: art("ornaments/ring"),
    cylinder: art("ornaments/cylinder"),
    pyramid: art("ornaments/pyramid"),
  },
  partners: [1, 2, 3, 4, 5].map((n) => a(`partners/logo-${n}.svg`)) as readonly string[],
  courses: {
    covers: {
      learnFigma: a("courses/learn-figma.png"),
      digitalAsset: a("courses/digital-asset.png"),
      bigData: a("courses/big-data.png"),
      productivity: a("courses/productivity.png"),
      moneyManagement: a("courses/money-management.png"),
      startup: a("courses/startup.png"),
    },
    learners: [1, 2, 3, 4].map((n) => a(`courses/learner-${n}.png`)) as readonly string[],
  },
  categories: {
    design: a("categories/design.svg"),
    development: a("categories/development.svg"),
    itSoftware: a("categories/it-software.svg"),
    business: a("categories/business.svg"),
    marketing: a("categories/marketing.svg"),
    photography: a("categories/photography.svg"),
  },
  feature: {
    studentLaptop: a("feature/student-laptop.png"),
    instructor: a("feature/instructor.png"),
    springA: art("feature/spring-a"),
    springB: art("feature/spring-b"),
    backdropBlobs: a("feature/backdrop-blobs.svg"),
    backdropGlow: a("feature/backdrop-glow.svg"),
  },
  cta: {
    coneLime: art("cta/cone-lime"),
    springBottomRight: art("cta/spring-br"),
    springLime: { art: a("cta/spring.png"), mask: a("cta/spring-lime-mask.png") },
    springWhite: { art: a("cta/spring.png"), mask: a("cta/spring-white-mask.png") },
    coneWhite: art("cta/cone-white"),
    ring: art("cta/ring"),
    cylinder: art("cta/cylinder"),
  },
  auth: {
    spring: art("auth/spring"),
    ring: art("auth/ring"),
    pyramid: art("auth/pyramid"),
  },
  testimonials: {
    sarah: a("testimonials/sarah.png"),
    james: a("testimonials/james.png"),
    alex: a("testimonials/alex.png"),
    glows: [1, 2, 3].map((n) => a(`testimonials/glow-${n}.svg`)) as readonly string[],
  },
} as const;
