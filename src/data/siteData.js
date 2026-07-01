export const site = {
  name: '펫스테이1455',
  enName: 'PETSTAY 1455',
  tagline: 'Private Pension · Private Poolvilla',
  phone: '010-6645-1455',
  address: '경상북도 경주시 외외길 176-67',
  business: '사업자번호: 412-12-01742',
  reservationUrl: 'https://booking.ddnayo.com/?accommodationId=21402',
  instagramUrl: 'https://www.instagram.com/petstay_1455/',
};

export const nav = [
  { label: '펫스테이1455', path: '/about' },
  { label: '객실', path: '/rooms/a', children: [
    { label: 'A동', path: '/rooms/a' },
    { label: 'B동', path: '/rooms/b' },
    { label: 'C동', path: '/rooms/c' },
  ]},
  { label: '시설', path: '/facility/garden', children: [
    { label: '개별잔디마당', path: '/facility/garden' },
    { label: '바베큐', path: '/facility/bbq' },
  ]},
  { label: '예약안내', path: '/reservation' },
  { label: '여행', path: '/travel' },
];

export const heroSlides = [
  {
    title: 'Stay in This Lovely Place',
    subtitle: 'Private Pension Petstay1455',
    image: '/images/hero-01.jpg',
  },
  {
    title: 'With Your Lovely Pet',
    subtitle: 'Private Poolvilla Petstay1455',
    image: '/images/hero-02.jpg',
  },
  {
    title: 'Green Yard & Calm Stay',
    subtitle: 'A place for dogs and family',
    image: '/images/hero-03.jpg',
  },
];

export const rooms = [
  {
    id: 'a',
    name: 'A동',
    en: 'A Building',
    path: '/rooms/a',
    image: '/images/room-a-01.jpg',
    summary: '독채형 구조와 넓은 개별 공간으로 편안하게 머무를 수 있는 객실입니다.',
    people: '기준 2인 / 최대 4인',
    check: '입실 15:00 · 퇴실 11:00',
    options: ['독채형 객실', '개별 잔디마당', '개별 바베큐', '반려견 동반 가능'],
    gallery: ['/images/room-a-01.jpg', '/images/room-a-02.jpg', '/images/room-a-03.jpg'],
  },
  {
    id: 'b',
    name: 'B동',
    en: 'B Building',
    path: '/rooms/b',
    image: '/images/room-b-01.jpg',
    summary: '가족과 반려견이 함께 쉬기 좋은 프라이빗 풀빌라 객실입니다.',
    people: '기준 2인 / 최대 4인',
    check: '입실 15:00 · 퇴실 11:00',
    options: ['프라이빗 풀', '개별 잔디마당', '취사 가능', '금연 객실'],
    gallery: ['/images/room-b-01.jpg', '/images/room-b-02.jpg', '/images/room-b-03.jpg'],
  },
  {
    id: 'c',
    name: 'C동',
    en: 'C Building',
    path: '/rooms/c',
    image: '/images/room-c-01.jpg',
    summary: '여유로운 동선과 깔끔한 인테리어가 돋보이는 독채형 객실입니다.',
    people: '기준 2인 / 최대 4인',
    check: '입실 15:00 · 퇴실 11:00',
    options: ['독채형 객실', '프라이빗 공간', '개별 바베큐', '반려견 동반 가능'],
    gallery: ['/images/room-c-01.jpg', '/images/room-c-02.jpg', '/images/room-c-03.jpg'],
  },
];

export const facilities = [
  {
    id: 'garden',
    title: '개별잔디마당',
    en: 'Private Green Yard',
    path: '/facility/garden',
    image: '/images/facility-garden.jpg',
    body: '객실마다 마련된 개별 잔디마당에서 반려견과 자유롭고 안전하게 시간을 보낼 수 있습니다.',
    notes: ['대형견까지 가능한 여유로운 공간', '자세한 내용은 문의 바랍니다.'],
  },
  {
    id: 'bbq',
    title: '바베큐',
    en: 'Barbecue',
    path: '/facility/bbq',
    image: '/images/facility-bbq.jpg',
    body: '프라이빗한 공간에서 가족, 친구, 반려견과 함께 바베큐 시간을 즐길 수 있습니다.',
    notes: ['이용 요금 및 시간은 현장/예약 시 확인', '자세한 내용은 문의 바랍니다.'],
  },
];

export const reservationRules = [
  '입실은 오후 3시부터, 퇴실은 오전 11시까지입니다.',
  '기준 인원 초과 시 1인당 20,000원의 추가요금이 발생합니다.',
  '전 객실 및 건물 내 모든 구역은 금연입니다.',
  '미성년자는 보호자 동반 없이 이용하실 수 없습니다.',
  '개인의 부주의로 인한 분실 및 사고가 일어나지 않도록 주의해 주세요.',
  '반려견 동반 관련 세부 조건은 예약 전 반드시 문의해 주세요.',
];

export const travel = [
  { title: '불국사', distance: '차량 이동 권장', image: '/images/travel-01.jpg' },
  { title: '석굴암', distance: '차량 이동 권장', image: '/images/travel-02.jpg' },
  { title: '보문관광단지', distance: '차량 이동 권장', image: '/images/travel-03.jpg' },
];
