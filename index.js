var Orders = [
    {
        productName: 'Shopping',
        productNumber: 'Dễ nóng dận, bướng bỉnh',
        PaymentStatus: 'Quầng cả buổi',
        status: 'Beautifull'
    },
    {
        productName: 'Skincare',
        productNumber: 'Hòa đồng với mọi người',
        PaymentStatus: 'Thức khuya, dậy trễ ',
        status: 'Đối với tôi, cô ấy đẹp nhất'
    },
    {
        productName: 'Chó, mèo dễ thương',
        productNumber: 'Chu đáo quan tâm mọi thứ xung quanh',
        PaymentStatus: 'Ăn uống không lành mạnh',
        status: 'Xuynh'
    },
]



const sidecontainer = document.querySelector('.container')
const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const darkMode = document.querySelector('.dark-mode');
const darkModeMemories = document.querySelector('.dark-mode-memories');
const darkModeUsually = document.querySelector('.dark-mode-usually');
const darkModeStudy = document.querySelector('.dark-mode-study');
const darkModeDashboard = document.querySelector('.dark-mode-Dashboard');



darkModeMemories.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-variable');
    darkMode.querySelector('span:nth-child(1)').classList.Memories.screen('active');
    darkMode.querySelector('span:nth-child(2)').classList.Memories.screen('active');
});

darkModeUsually.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-variable');
    darkMode.querySelector('span:nth-child(1)').classList.Usually.screen('active');
    darkMode.querySelector('span:nth-child(2)').classList.Usually.screen('active');
});



darkModeStudy.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-variable');
    darkMode.querySelector('span:nth-child(1)').classList.Study.screen('active');
    darkMode.querySelector('span:nth-child(2)').classList.Study.screen('active');
});

darkModeDashboard.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-variable');
    darkMode.querySelector('span:nth-child(1)').classList.Study.screen('active');
    darkMode.querySelector('span:nth-child(2)').classList.Study.screen('active');
});


menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});

darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-variable');
    darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
    darkMode.querySelector('span:nth-child(2)').classList.toggle('active');

    // darkMode.querySelector('span:nth-child(1)').classList.right - section('active');
    // darkMode.querySelector('span:nth-child(2)').classList.right - section('active');
});



Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
        <td>${order.productName}</td>
        <td>${order.productNumber}</td>
        <td>${order.PaymentStatus}</td>
        <td class="${order.status === 'Beautifull' ?
            'danger' : order.status === 'Xuynh' ? 'warning'
                : 'primary'}">${order.status}</td>
        <td >😘</td>
    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});


const closeBa = document.getElementById('close-ba')
const sideLetter = document.querySelector('.letter');
const mailBtn = document.getElementById('mail-btn');
mailBtn.addEventListener('click', () => {
    sideLetter.style.display = 'block';
});

closeBa.addEventListener('click', () => {
    sideLetter.style.display = 'none';
});

const videoBtn = document.getElementById('video-btn');
const sideVideo = document.querySelector('.video');
const closeAc = document.getElementById('close-ca');
videoBtn.addEventListener('click', () => {
    sideVideo.style.display = 'block';
});

closeAc.addEventListener('click', () => {
    sideVideo.style.display = 'none';
});

const sideMemories = document.querySelector('.Memories');
const homeBtn = document.getElementById('home-btn');
const Memories = document.getElementById('video-btn1');

Memories.addEventListener('click', () => {
    sideMemories.style.display = 'block';
    sideVideo.style.display = 'none';
    sidecontainer.style.display = 'none';
});

homeBtn.addEventListener('click', () => {
    sideMemories.style.display = 'none';
    sidecontainer.style.display = 'grid';

});


const homeBtnz = document.getElementById('home-btnz');

homeBtnz.addEventListener('click', () => {
    sideMemories.style.display = 'none';
    sidecontainer.style.display = 'grid';

});

const homeBtny = document.getElementById('home-btny');

homeBtny.addEventListener('click', () => {
    sideMemories.style.display = 'none';
    sidecontainer.style.display = 'grid';

});

const homeBtnx = document.getElementById('home-btnx');

homeBtnx.addEventListener('click', () => {
    sideMemories.style.display = 'none';
    sidecontainer.style.display = 'grid';

});

const homeBtnq = document.getElementById('home-btnq');

homeBtnq.addEventListener('click', () => {
    sideDashboard.style.display = 'none';
    sidecontainer.style.display = 'grid';

});


homeBtn.addEventListener('click', () => {
    sideMemories.style.display = 'none';
    sidecontainer.style.display = 'grid';

});

const sideUsually = document.querySelector('.Usually');
const homeBtn1 = document.getElementById('home-btn1');
const Usually = document.getElementById('video-btn2');

Usually.addEventListener('click', () => {
    sideUsually.style.display = 'block';
    sideVideo.style.display = 'none';
    sidecontainer.style.display = 'none';
});

homeBtn1.addEventListener('click', () => {
    sideUsually.style.display = 'none';
    sidecontainer.style.display = 'grid';

});

const sideStudy = document.querySelector('.Study');
const homeBtn2 = document.getElementById('home-btn2');
const Study = document.getElementById('video-btn3');

Study.addEventListener('click', () => {
    sideStudy.style.display = 'block';
    sideVideo.style.display = 'none';
    sidecontainer.style.display = 'none';
});

homeBtn2.addEventListener('click', () => {
    sideStudy.style.display = 'none';
    sidecontainer.style.display = 'grid';

});


const sideDashboard = document.querySelector('.Dashboard');
const homeBtn3 = document.getElementById('home-btn3');
const Dashboard = document.getElementById('Dashboard-btn');

Dashboard.addEventListener('click', () => {
    sideDashboard.style.display = 'block';
    sidecontainer.style.display = 'none';
});

homeBtn3.addEventListener('click', () => {
    sideDashboard.style.display = 'none';
    sidecontainer.style.display = 'grid';

});

const sideCard = document.querySelector('.Card');
const homeBtn4 = document.getElementById('home-btn4');
const Card = document.getElementById('CardGiftcard-btn');

Card.addEventListener('click', () => {
    sideCard.style.display = 'block';
    sidecontainer.style.display = 'none';

});

homeBtn4.addEventListener('click', () => {
    sideCard.style.display = 'none';
    sidecontainer.style.display = 'grid';

});










const currentDateHtml = document.querySelector("#currentDate");
const currentTimeHtml = document.querySelector("#currentTime");



var formatString = function (value) {
    return value < 10 ? '0' + value : value
}

const getCurrentDate = function () {

    var curDatte = new Date();
    var dd = curDatte.getUTCDate();
    var mmth = curDatte.getMonth();
    var yy = curDatte.getFullYear();
    var hh = curDatte.getHours();
    var mm = curDatte.getMinutes();
    var ss = curDatte.getSeconds();
    var fmMonth = mmth + 1;
    var stringDate = ` ${formatString(dd)}-${formatString(fmMonth)}-${yy}`;
    var stringTime = `${formatString(hh)}:${formatString(mm)}:${formatString(ss)}`;

    currentDateHtml.innerHTML = stringDate
    currentTimeHtml.innerHTML = stringTime
}

const autoGetTime = function () {
    setInterval(() => {
        getCurrentDate()

    }, 1000)
}

autoGetTime()

const totalDate = document.querySelector("#totalDate");
const totalBirthdayme = document.querySelector("#totalBirthdayme");
const totalBirthdayher = document.querySelector("#totalBirthdayher");



const getTotalDate = function () {
    const start = new Date("12/10/2021").getTime();
    const end = new Date().getTime();
    const result = Math.floor((end - start) / (1000 * 60 * 60 * 24))
    totalDate.innerHTML = `${result.toString()}❤️`;

}

const getTotalBirthdayme = function () {
    const starttotalBirthdayme = new Date("01/01/2006").getTime();
    const endtotalBirthdayme = new Date().getTime();
    const resulttotalBirthdayme = Math.floor((endtotalBirthdayme - starttotalBirthdayme) / (1000 * 60 * 60 * 24 * 365));
    totalBirthdayme.innerHTML = `${resulttotalBirthdayme.toString()} old`;
}

const getTotalBirthdayher = function () {
    const starttotalBirthdayher = new Date("5/25/2006").getTime();
    const endtotalBirthdayher = new Date().getTime();
    const resulttotalBirthdayher = Math.floor((endtotalBirthdayher - starttotalBirthdayher) / (1000 * 60 * 60 * 24 * 365));
    totalBirthdayher.innerHTML = `${resulttotalBirthdayher.toString()} old`;
}

setTimeout(() => {
    getTotalDate();
    getTotalBirthdayme();
    getTotalBirthdayher();


}, 1000)









