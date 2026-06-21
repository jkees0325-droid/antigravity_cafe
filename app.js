// Default Cafes Data
const DEFAULT_CAFES = [
  {
    id: 'default-1',
    name: '커피수목원',
    location: '참살이길',
    purposes: ['디저트', '수다/감성'],
    openTime: '10:00',
    closeTime: '22:30',
    mapLink: 'https://map.naver.com/p/search/%EC%BB%A4%ED%94%BC%EC%88%98%EB%AA%A9%EC%9B%90/place/38287754',
    review: '안암에서 수제 와플과 음료가 맛있고 아늑한 다락방 분위기로 대화하기 좋은 디저트 카페.'
  },
  {
    id: 'default-2',
    name: '커피빈 고대안암역점',
    location: '개운사길',
    purposes: ['카공', '수다/감성'],
    openTime: '06:30',
    closeTime: '23:59',
    mapLink: 'https://map.naver.com/p/entry/place/19864205',
    review: '아침 일찍부터 자정 근처까지 영업하며, 콘센트가 많아 카공 및 과제하기 아주 좋습니다.'
  },
  {
    id: 'default-3',
    name: '정만빙수 안암본점',
    location: '참살이길',
    purposes: ['디저트', '밥약'],
    openTime: '12:00',
    closeTime: '22:00',
    mapLink: 'https://map.naver.com/p/search/%EC%A0%95%EB%A7%8C%EB%B9%99%EC%88%98%20%EC%95%88%EC%95%9B/place/34720619',
    review: '가성비 넘치는 생과일/팥빙수 전문점. 동아리 밥약이나 선후배 모임 직후 디저트로 추천!'
  },
  {
    id: 'default-4',
    name: '더벤티 고려대역점',
    location: '법후',
    purposes: ['테이크아웃', '디저트'],
    openTime: '08:00',
    closeTime: '22:00',
    mapLink: 'https://map.naver.com/p/search/%EB%8D%94%EB%B2%A4%ED%8B%B0%20%EA%B3%A0%EB%A0%A4%EB%8C%80%EC%97%AD%EC%A0%90/place/1559981881',
    review: '법대 후문 근처 가성비의 최강자. 수업 전에 빠르게 테이크아웃하기 좋습니다.'
  },
  {
    id: 'default-5',
    name: '투썸플레이스 고려대CJ법학관점',
    location: '교내',
    purposes: ['카공', '수다/감성'],
    openTime: '08:30',
    closeTime: '20:00',
    mapLink: 'https://map.naver.com/p/search/%ED%85%A4%EC%8D%B8%ED%94%8C%EB%A0%88%EC%9D%B4%EC%8A%A4%20%EA%B3%A0%EB%A0%A4%EB%8C%80CJ%EB%B2%95%ED%95%99%EA%B4%80%EC%A0%90/place/31032338',
    review: 'CJ법학관 1층의 쾌적한 대형 매장. 로스쿨 및 법학관 학생들의 모임이나 공부 장소로 인기.'
  },
  {
    id: 'default-6',
    name: '카페 J (카페제이)',
    location: '개운사길',
    purposes: ['카공', '수다/감성'],
    openTime: '12:00',
    closeTime: '21:00',
    mapLink: 'https://map.naver.com/p/search/%EC%95%88%EC%95%9B%20%EC%B9%B4%ED%8E%98J/place/12316499',
    review: '개운사길 골목에 숨겨진 조용한 카공 명소. 아늑하고 집중도가 높은 실내 구조가 장점.'
  },
  {
    id: 'default-7',
    name: '메이크미해피',
    location: '참살이길',
    purposes: ['디저트', '수다/감성'],
    openTime: '12:00',
    closeTime: '22:00',
    mapLink: 'https://map.naver.com/p/search/%EB%A9%94%EC%9D%B4%ED%81%AC%EB%AF%B8%ED%95%B4%ED%94%BC/place/1739257697',
    review: '수제 레몬딜 케이크가 유명하며 아기자기하고 귀여운 인형/소품이 가득한 감성 카페.'
  },
  {
    id: 'default-8',
    name: '커피소',
    location: '참살이길',
    purposes: ['카공', '수다/감성'],
    openTime: '11:00',
    closeTime: '01:00',
    mapLink: 'https://map.naver.com/p/search/%EC%95%88%EC%95%9B%20%EC%BB%A4%ED%94%BC%EC%86%8C/place/13511119',
    review: '새벽 1시 늦은 시간까지 운영하여 밤샘 공부나 과제하기 좋은 숨겨진 다락 공간.'
  },
  {
    id: 'default-9',
    name: '카페 안암동',
    location: '참살이길',
    purposes: ['수다/감성', '디저트'],
    openTime: '12:00',
    closeTime: '22:00',
    mapLink: 'https://map.naver.com/p/search/%EC%B9%B4%ED%8E%98%20%EC%95%88%EC%95%9B%EB%8F%94/place/1749876251',
    review: '상호명과 같은 편안하고 아늑한 분위기의 카페. 커피와 달콤한 크림 크로플이 인기 메뉴.'
  }
];

// State variables
let userCafes = [];
let bookmarks = [];
let selectedLocation = 'all';

// DOM Elements
const cafeGrid = document.getElementById('cafe-grid');
const emptyState = document.getElementById('empty-state');
const cafeCount = document.getElementById('cafe-count');
const searchInput = document.getElementById('search-input');
const locationPills = document.getElementById('location-pills');
const purposeCheckboxes = document.getElementById('purpose-checkboxes');
const timeCheckboxes = document.getElementById('time-checkboxes');
const openNowToggle = document.getElementById('open-now-toggle');
const bookmarkOnlyToggle = document.getElementById('bookmark-only-toggle');

// Modal Elements
const registerModal = document.getElementById('register-modal');
const openModalBtn = document.getElementById('open-register-modal-btn');
const closeModalBtn = document.getElementById('close-modal-btn');
const cancelRegisterBtn = document.getElementById('cancel-register-btn');
const emptyRegisterBtn = document.getElementById('empty-register-btn');
const registerForm = document.getElementById('register-form');

// Initialize Application
function init() {
  // Load data from localStorage
  const savedUserCafes = localStorage.getItem('ku_user_cafes');
  if (savedUserCafes) {
    try {
      userCafes = JSON.parse(savedUserCafes);
    } catch (e) {
      console.error('Failed to parse user cafes', e);
      userCafes = [];
    }
  }

  const savedBookmarks = localStorage.getItem('ku_cafe_bookmarks');
  if (savedBookmarks) {
    try {
      bookmarks = JSON.parse(savedBookmarks);
    } catch (e) {
      console.error('Failed to parse bookmarks', e);
      bookmarks = [];
    }
  }

  // Create Mobile FAB
  createMobileFloatingButton();

  // Event Listeners setup
  setupEventListeners();

  // Initial render
  renderCafes();
}

// Create floating button for mobile
function createMobileFloatingButton() {
  if (!document.querySelector('.btn-float-mobile')) {
    const floatBtn = document.createElement('button');
    floatBtn.className = 'btn-float-mobile';
    floatBtn.id = 'open-register-modal-btn-float';
    floatBtn.innerHTML = `
      <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
      </svg>
    `;
    floatBtn.title = "새로운 카페 등록하기";
    document.body.appendChild(floatBtn);

    floatBtn.addEventListener('click', openModal);
  }
}

// Event Listeners registration
function setupEventListeners() {
  // Modal toggle
  openModalBtn.addEventListener('click', openModal);
  closeModalBtn.addEventListener('click', closeModal);
  cancelRegisterBtn.addEventListener('click', closeModal);
  emptyRegisterBtn.addEventListener('click', openModal);

  // Close modal when clicking outside the modal content
  registerModal.addEventListener('click', (e) => {
    if (e.target === registerModal) {
      closeModal();
    }
  });

  // Handle new cafe submission
  registerForm.addEventListener('submit', handleRegisterCafe);

  // Filters interaction
  locationPills.addEventListener('click', handleLocationPillClick);

  // Search input: Press enter to apply
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      document.getElementById('apply-filters-btn').click();
    }
  });

  // Recommendations button (Apply Filters)
  document.getElementById('apply-filters-btn').addEventListener('click', () => {
    // Show a premium loading transition
    cafeGrid.classList.add('loading');
    
    setTimeout(() => {
      renderCafes();
      cafeGrid.classList.remove('loading');
      
      // Scroll to results section on mobile
      if (window.innerWidth <= 900) {
        cafeGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 300);
  });

  // Reset button (resets immediately)
  document.getElementById('reset-filters-btn').addEventListener('click', resetFilters);

  // Utility toggles filter immediately when clicked
  openNowToggle.addEventListener('change', renderCafes);
}

// Modal open/close actions
function openModal() {
  registerModal.classList.remove('hidden');
  document.body.style.overflow = 'hidden'; // prevent scroll
  
  // Set default hours closer to current time rounded
  const now = new Date();
  const currentHour = String(now.getHours()).padStart(2, '0');
  document.getElementById('reg-open-time').value = "09:00";
  document.getElementById('reg-close-time').value = "22:00";
}

function closeModal() {
  registerModal.classList.add('hidden');
  document.body.style.overflow = ''; // restore scroll
  registerForm.reset();
}

// Location Pills Interaction
function handleLocationPillClick(e) {
  const clickedPill = e.target.closest('.pill');
  if (!clickedPill) return;

  // Toggle active class among pills
  locationPills.querySelectorAll('.pill').forEach(pill => pill.classList.remove('active'));
  clickedPill.classList.add('active');

  selectedLocation = clickedPill.getAttribute('data-value');
}

// Reset Filters
function resetFilters() {
  searchInput.value = '';
  
  // Reset pills
  locationPills.querySelectorAll('.pill').forEach(pill => pill.classList.remove('active'));
  locationPills.querySelector('[data-value="all"]').classList.add('active');
  selectedLocation = 'all';

  // Reset checkboxes
  purposeCheckboxes.querySelectorAll('input').forEach(cb => cb.checked = false);
  timeCheckboxes.querySelectorAll('input').forEach(cb => cb.checked = false);

  // Reset switches
  openNowToggle.checked = false;
  bookmarkOnlyToggle.checked = false;

  renderCafes();
}

// Determine if a cafe is currently open
function isCafeOpenNow(openTime, closeTime) {
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const [openHour, openMin] = openTime.split(':').map(Number);
  const [closeHour, closeMin] = closeTime.split(':').map(Number);

  const openMinutes = openHour * 60 + openMin;
  let closeMinutes = closeHour * 60 + closeMin;

  // If closing time is early next morning (e.g. 02:00)
  if (closeMinutes < openMinutes) {
    closeMinutes += 24 * 60; // add 24 hours in minutes
    
    // If current time is early morning before closing time
    if (currentMinutes < (closeHour * 60 + closeMin)) {
      return (currentMinutes + 24 * 60) >= openMinutes && (currentMinutes + 24 * 60) < closeMinutes;
    }
  }

  return currentMinutes >= openMinutes && currentMinutes < closeMinutes;
}

// Evaluate operating hour slots
function matchesTimeSlots(openTime, closeTime, checkedSlots) {
  if (checkedSlots.length === 0) return false;

  const [openHour, openMin] = openTime.split(':').map(Number);
  const [closeHour, closeMin] = closeTime.split(':').map(Number);

  const openMinutes = openHour * 60 + openMin;
  let closeMinutes = closeHour * 60 + closeMin;
  if (closeMinutes < openMinutes) {
    closeMinutes += 24 * 60;
  }

  return checkedSlots.some(slot => {
    switch (slot) {
      case 'morning':
        // Opens at or before 09:00 AM
        return openMinutes <= 9 * 60;
      case 'afternoon':
        // Open during afternoon range (12:00 - 17:00)
        return openMinutes <= 17 * 60 && closeMinutes >= 12 * 60;
      case 'evening':
        // Open/Closes at or after 09:00 PM (21:00)
        return closeMinutes >= 21 * 60;
      case 'night':
        // Open/Closes at or after 11:00 PM (23:00) or runs overnight
        return closeMinutes >= 23 * 60 || closeMinutes > 24 * 60;
      default:
        return false;
    }
  });
}

// Get Cafe Vibe Header properties (emoji and gradient)
function getCafeVibeHeader(purposes) {
  if (purposes.includes('테이크아웃')) {
    return {
      icon: '🥤',
      gradient: 'linear-gradient(135deg, #CCFBF1 0%, #99F6E4 100%)', // Mint/Teal
      textColor: '#0F766E'
    };
  } else if (purposes.includes('카공')) {
    return {
      icon: '💻',
      gradient: 'linear-gradient(135deg, #E0F2FE 0%, #BAE6FD 100%)',
      textColor: '#0369A1'
    };
  } else if (purposes.includes('디저트')) {
    return {
      icon: '🍰',
      gradient: 'linear-gradient(135deg, #FCE7F3 0%, #FBCFE8 100%)',
      textColor: '#BE185D'
    };
  } else if (purposes.includes('수다/감성')) {
    return {
      icon: '💬',
      gradient: 'linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)',
      textColor: '#B45309'
    };
  }
  return {
    icon: '☕',
    gradient: 'linear-gradient(135deg, #F3F4F6 0%, #E5E7EB 100%)',
    textColor: '#4B5563'
  };
}

// Get Location Badge Class
function getLocationBadgeClass(location) {
  switch (location) {
    case '참살이길':
      return 'badge-chamsari';
    case '개운사길':
      return 'badge-gaeunsa';
    case '정후':
      return 'badge-jeonghu';
    case '법후':
      return 'badge-beophu';
    case '교내':
    default:
      return 'badge-campus';
  }
}

// Main Filtering and Rendering Logic
function renderCafes() {
  const allCafes = [...DEFAULT_CAFES, ...userCafes];
  
  // Gather active filter inputs
  const searchQuery = searchInput.value.toLowerCase().trim();
  
  const checkedPurposes = Array.from(purposeCheckboxes.querySelectorAll('input:checked')).map(cb => cb.value);
  const checkedTimeSlots = Array.from(timeCheckboxes.querySelectorAll('input:checked')).map(cb => cb.value);
  
  const isOpenNowOnly = openNowToggle.checked;
  const isBookmarkOnly = bookmarkOnlyToggle.checked;

  // Filter Cafes
  const filteredCafes = allCafes.filter(cafe => {
    // 1. Search Query Filter
    if (searchQuery && !cafe.name.toLowerCase().includes(searchQuery)) {
      return false;
    }

    // 2. Location Filter
    if (selectedLocation !== 'all' && cafe.location !== selectedLocation) {
      return false;
    }

    // 3. Purpose Filter (Intersection Check)
    if (checkedPurposes.length > 0) {
      const hasMatchingPurpose = cafe.purposes.some(p => checkedPurposes.includes(p));
      if (!hasMatchingPurpose) return false;
    }

    // 4. Time Slots Filter
    if (checkedTimeSlots.length > 0) {
      const matchesTime = matchesTimeSlots(cafe.openTime, cafe.closeTime, checkedTimeSlots);
      if (!matchesTime) return false;
    }

    // 5. Open Now Filter
    if (isOpenNowOnly && !isCafeOpenNow(cafe.openTime, cafe.closeTime)) {
      return false;
    }

    // 6. Bookmarks Filter
    if (isBookmarkOnly && !bookmarks.includes(cafe.id)) {
      return false;
    }

    return true;
  });

  // Render cards
  cafeCount.textContent = filteredCafes.length;
  cafeGrid.innerHTML = '';

  if (filteredCafes.length === 0) {
    cafeGrid.style.display = 'none';
    emptyState.classList.remove('hidden');
  } else {
    cafeGrid.style.display = 'grid';
    emptyState.classList.add('hidden');

    filteredCafes.forEach(cafe => {
      const card = createCafeCard(cafe);
      cafeGrid.appendChild(card);
    });
  }
}

// Create Card HTML Element
function createCafeCard(cafe) {
  const cardDiv = document.createElement('div');
  cardDiv.className = 'cafe-card';
  cardDiv.setAttribute('data-id', cafe.id);

  const isBookmarked = bookmarks.includes(cafe.id);
  const isOpen = isCafeOpenNow(cafe.openTime, cafe.closeTime);
  const vibe = getCafeVibeHeader(cafe.purposes);
  const badgeClass = getLocationBadgeClass(cafe.location);

  // Format purpose tags
  const tagsHTML = cafe.purposes.map((p, idx) => {
    const isPrimary = idx === 0;
    return `<span class="tag ${isPrimary ? 'tag-accent' : ''}">${p}</span>`;
  }).join('');

  // Setup Map Link Button HTML
  let mapLinkHTML = '';
  if (cafe.mapLink) {
    mapLinkHTML = `
      <a href="${cafe.mapLink}" target="_blank" class="card-link-btn">
        지도 보기 
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="7" y1="17" x2="17" y2="7"></line>
          <polyline points="7 7 17 7 17 17"></polyline>
        </svg>
      </a>`;
  } else {
    mapLinkHTML = `<span class="card-link-btn disabled">지도 링크 없음</span>`;
  }

  cardDiv.innerHTML = `
    <!-- Bookmark Button -->
    <button class="card-bookmark-btn ${isBookmarked ? 'bookmarked' : ''}" aria-label="즐겨찾기">
      <svg viewBox="0 0 24 24">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
    </button>
    
    <!-- Vibe Header -->
    <div class="card-vibe-header" style="background: ${vibe.gradient}; color: ${vibe.textColor}">
      <span class="vibe-icon">${vibe.icon}</span>
      <span class="location-badge ${badgeClass}">${cafe.location}</span>
    </div>

    <!-- Details -->
    <div class="card-content">
      <div class="card-title-row">
        <h3 class="card-title">${cafe.name}</h3>
      </div>
      
      <!-- Status Badge -->
      <div class="card-status-row">
        <span class="status-indicator ${isOpen ? 'status-open' : 'status-closed'}">
          <span class="status-dot"></span>
          ${isOpen ? '영업 중' : '영업 종료'}
        </span>
        <span class="time-text">⏱ ${cafe.openTime} ~ ${cafe.closeTime}</span>
      </div>

      <!-- Purposes -->
      <div class="purpose-tags">
        ${tagsHTML}
      </div>

      <!-- One-line review -->
      <p class="card-review">"${cafe.review}"</p>

      <!-- Action Bar -->
      <div class="card-action-bar">
        ${mapLinkHTML}
      </div>
    </div>
  `;

  // Bookmark button handler
  const bookmarkBtn = cardDiv.querySelector('.card-bookmark-btn');
  bookmarkBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleBookmark(cafe.id);
  });

  return cardDiv;
}

// Toggle Bookmark state
function toggleBookmark(cafeId) {
  const index = bookmarks.indexOf(cafeId);
  if (index > -1) {
    // Remove from bookmarks
    bookmarks.splice(index, 1);
  } else {
    // Add to bookmarks
    bookmarks.push(cafeId);
  }

  // Update localStorage
  localStorage.setItem('ku_cafe_bookmarks', JSON.stringify(bookmarks));

  // Re-render
  renderCafes();
}

// Handle Cafe Form Registration
function handleRegisterCafe(e) {
  e.preventDefault();

  const nameInput = document.getElementById('reg-name');
  const locationInput = document.querySelector('input[name="reg-location"]:checked');
  const purposeInputs = Array.from(document.querySelectorAll('input[name="reg-purpose"]:checked'));
  const openTimeInput = document.getElementById('reg-open-time');
  const closeTimeInput = document.getElementById('reg-close-time');
  const mapInput = document.getElementById('reg-map');
  const reviewInput = document.getElementById('reg-review');

  // Validation
  const name = nameInput.value.trim();
  const location = locationInput.value;
  const purposes = purposeInputs.map(cb => cb.value);
  const openTime = openTimeInput.value;
  const closeTime = closeTimeInput.value;
  const mapLink = mapInput.value.trim();
  const review = reviewInput.value.trim();

  if (!name) {
    alert('카페 이름을 입력해주세요.');
    return;
  }

  if (purposes.length === 0) {
    alert('방문 목적을 최소 1개 이상 선택해주세요.');
    return;
  }

  if (!openTime || !closeTime) {
    alert('영업 시간을 설정해주세요.');
    return;
  }

  if (!review) {
    alert('한 줄 추천평을 작성해주세요.');
    return;
  }

  // Create new cafe object
  const newCafe = {
    id: `user-${Date.now()}`,
    name,
    location,
    purposes,
    openTime,
    closeTime,
    mapLink,
    review
  };

  // Add to state and save
  userCafes.push(newCafe);
  localStorage.setItem('ku_user_cafes', JSON.stringify(userCafes));

  // Close modal and refresh list
  closeModal();
  renderCafes();

  // Scroll to show the newly added cafe
  setTimeout(() => {
    const cardEl = document.querySelector(`[data-id="${newCafe.id}"]`);
    if (cardEl) {
      cardEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      cardEl.style.boxShadow = '0 0 15px var(--crimson-glow)';
      cardEl.style.borderColor = 'var(--crimson)';
      setTimeout(() => {
        cardEl.style.boxShadow = '';
        cardEl.style.borderColor = '';
      }, 2000);
    }
  }, 300);
}

// Utility: Debounce input actions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Launch Application
document.addEventListener('DOMContentLoaded', init);
