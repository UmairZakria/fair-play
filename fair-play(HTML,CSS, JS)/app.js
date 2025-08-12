// Replicate key interactive behaviors from React components in vanilla JS

// 1) Leftnav tab indicator and active state
(function setupTabs() {
  const tabChat = document.getElementById('tab-chat');
  const tabSupport = document.getElementById('tab-support');
  const indicator = document.getElementById('tab-indicator');
  if (!tabChat || !tabSupport || !indicator) return;

  function setActive(tab) {
    if (tab === 'chat') {
      indicator.style.transform = 'translateX(0%)';
      tabChat.classList.add('active');
      tabSupport.classList.remove('active');
      tabChat.style.color = '#E2B76C';
      tabSupport.style.color = 'rgba(255,255,255,0.8)';
    } else {
      indicator.style.transform = 'translateX(100%)';
      tabSupport.classList.add('active');
      tabChat.classList.remove('active');
      tabSupport.style.color = '#E2B76C';
      tabChat.style.color = 'rgba(255,255,255,0.8)';
    }
  }

  tabChat.addEventListener('click', () => setActive('chat'));
  tabSupport.addEventListener('click', () => setActive('support'));

  // Initial
  setActive('chat');
})();

// 2) Aurum toggle button behavior
(function setupAurumToggle() {
  const toggle = document.getElementById('aurum-toggle');
  if (!toggle) return;
  const slider = document.getElementById('aurum-slider');
  const chip = document.getElementById('aurum-chip');
  const label = document.getElementById('aurum-label');
  const onEl = document.getElementById('aurum-on');
  const offEl = document.getElementById('aurum-off');

  let isOn = false;
  function render() {
    if (isOn) {
      slider.style.left = '0.25rem';
      chip.style.background = '#121110';
      chip.style.border = '1px solid #F3DEB3';
      label.style.color = '#F4CF81';
      onEl.style.opacity = '1';
      offEl.style.opacity = '0';
    } else {
      slider.style.left = '2.5rem';
      chip.style.background = 'linear-gradient(to right, #E8A363, #F3DEB3, #F5C857)';
      chip.style.border = '1px solid #E2B76C';
      label.style.color = '#121110';
      onEl.style.opacity = '0';
      offEl.style.opacity = '1';
    }
  }
  toggle.addEventListener('click', () => {
    isOn = !isOn;
    render();
  });
  render();
})();

// 3) Betting numbers grid (mirrors Bettingtable.jsx data and colors)
(function mountNumbersGrid() {
  const grid = document.getElementById('numbers-grid');
  if (!grid) return;
  const numbers = [
    { num: 3, color: 'red' },
    { num: 6, color: 'black' },
    { num: 9, color: 'red' },
    { num: 12, color: 'red' },
    { num: 15, color: 'black' },
    { num: 18, color: 'red' },
    { num: 21, color: 'red' },
    { num: 24, color: 'black' },
    { num: 27, color: 'red' },
    { num: 30, color: 'red' },
    { num: 33, color: 'black' },
    { num: 36, color: 'red' },
    { num: 2, color: 'black' },
    { num: 5, color: 'red' },
    { num: 8, color: 'black' },
    { num: 11, color: 'black' },
    { num: 14, color: 'red' },
    { num: 17, color: 'black' },
    { num: 20, color: 'black' },
    { num: 23, color: 'red' },
    { num: 26, color: 'black' },
    { num: 29, color: 'black' },
    { num: 32, color: 'red' },
    { num: 35, color: 'black' },
    { num: 1, color: 'red' },
    { num: 4, color: 'black' },
    { num: 7, color: 'red' },
    { num: 10, color: 'black' },
    { num: 13, color: 'black' },
    { num: 16, color: 'red' },
    { num: 19, color: 'red' },
    { num: 22, color: 'black' },
    { num: 25, color: 'red' },
    { num: 28, color: 'black' },
    { num: 31, color: 'black' },
    { num: 34, color: 'red' },
  ];

  numbers.forEach((item) => {
    const btn = document.createElement('button');
    btn.textContent = String(item.num);
    btn.className = 'w-9 h-9 font-bold text-white rounded-md text-xs transition-all duration-300 ease-in-out border border-white/30 hover:opacity-80';
    if (item.color === 'red') {
      btn.style.backgroundColor = '#B2121F';
    } else {
      // enforce primary background
      btn.style.backgroundColor = '#121110';
    }
    btn.addEventListener('mouseenter', () => {
      if (item.color === 'red') {
        btn.style.filter = 'brightness(0.95)';
      } else {
        btn.style.filter = 'brightness(0.95)';
      }
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.filter = '';
    });
    grid.appendChild(btn);
  });
})();


