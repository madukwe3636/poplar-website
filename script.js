const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

const platformTabs = {
  'virtual-accounts': {
    heading: 'Get access to virtual accounts to manage your global payments and finances',
    cards: [
      { img: 'assets/wallet.png',   caption: 'Open your local currencies anywhere to receive funds from your customers' },
      { img: 'assets/accounts.png', caption: 'Make global transfers at interbank rates' },
    ],
  },
  'payments': {
    heading: 'Move money globally, with full visibility',
    cards: [
      { img: 'assets/transactions.png', caption: 'Collect global payments with shareable links and automatic reconciliation and real-time visibility.' },
      { img: 'assets/metrics.png',      caption: 'Send bulk payments to vendors, partners, or payroll at scale with controlled settlement and clear transaction tracking.' },
    ],
  },
  'platform-apis': {
    heading: 'Build global payments into your product',
    cards: [
      { img: 'assets/transactions.png', caption: 'Integrate global payment flows directly into your application using Puplar\'s checkout & payment APIs.' },
      { img: 'assets/accounts.png',     caption: 'Manage virtual accounts for customers using APIs, with real-time balance tracking and transaction visibility.' },
    ],
  },
};

function renderTab(id){
  const box = document.getElementById('platform-content');
  if (!box) return;
  const t = platformTabs[id];
  box.style.animation = 'none';
  void box.offsetWidth;
  box.style.animation = '';
  box.innerHTML = `
    <div>
      <h3>${t.heading}</h3>
      <a href="#" class="platform-cta">Get Started →</a>
    </div>
    <div class="platform-cards">
      ${t.cards.map(c=>`
        <div class="p-card">
          <div class="p-card-img"><img src="${c.img}" alt="" /></div>
          <p>${c.caption}</p>
        </div>`).join('')}
    </div>`;
}

const tabButtons = document.querySelectorAll('.tab');
if (tabButtons.length){
  tabButtons.forEach(b=>{
    b.addEventListener('click',()=>{
      tabButtons.forEach(x=>x.classList.remove('active'));
      b.classList.add('active');
      renderTab(b.dataset.tab);
    });
  });
  renderTab('virtual-accounts');
}
