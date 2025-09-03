
// 猫咪品种分类
const breedCategories = {
    '狸花/简州': ['狸花', '简州', '狸花猫', '简州猫'],
    '三花': ['三花', '三花猫'],
    '橘猫/橘白': ['橘猫', '橘白', '橘色', '橘白猫'],
    '奶牛': ['奶牛', '黑白', '奶牛猫'],
    '玳瑁': ['玳瑁', '玳瑁猫'],
    '黑猫': ['黑猫', '黑色'],
    '白猫': ['白猫', '白色'],
    '美短': ['美短', '美国短毛猫'],
    '其他': ['其他', '混血', '未知']
};

//猫咪品种数据
// 猫咪数据 - 为每只猫准确指定品种和性别
const catsData = [
    // 前53只母猫
    { number: '001', gender: 'female', breed: '白猫' },
    { number: '002', gender: 'female', breed: '玳瑁' },
    { number: '003', gender: 'female', breed: '玳瑁' },
    { number: '004', gender: 'female', breed: '狸花/简州' },
    { number: '005', gender: 'female', breed: '狸花/简州' },
    { number: '006', gender: 'female', breed: '玳瑁' },
    { number: '007', gender: 'female', breed: '三花' },
    { number: '008', gender: 'female', breed: '狸花/简州' },
    { number: '009', gender: 'female', breed: '橘猫/橘白' },
    { number: '010', gender: 'female', breed: '三花' },

    { number: '011', gender: 'female', breed: '三花' },
    { number: '012', gender: 'female', breed: '橘猫/橘白' },
    { number: '013', gender: 'female', breed: '奶牛' },
    { number: '014', gender: 'female', breed: '黑猫' },
    { number: '015', gender: 'female', breed: '玳瑁' },
    { number: '016', gender: 'female', breed: '白猫' },
    { number: '017', gender: 'female', breed: '三花' },
    { number: '018', gender: 'female', breed: '三花' },
    { number: '019', gender: 'female', breed: '狸花/简州' },
    { number: '020', gender: 'female', breed: '三花' },

    { number: '021', gender: 'female', breed: '白猫' },
    { number: '022', gender: 'female', breed: '玳瑁' },
    { number: '023', gender: 'female', breed: '狸花/简州' },
    { number: '024', gender: 'female', breed: '橘猫/橘白' },
    { number: '025', gender: 'female', breed: '狸花/简州' },
    { number: '026', gender: 'female', breed: '三花' },
    { number: '027', gender: 'female', breed: '奶牛' },
    { number: '028', gender: 'female', breed: '玳瑁' },
    { number: '029', gender: 'female', breed: '三花' },
    { number: '030', gender: 'female', breed: '其他' },


    { number: '031', gender: 'female', breed: '白猫' },
    { number: '032', gender: 'female', breed: '三花' },
    { number: '033', gender: 'female', breed: '三花' },
    { number: '034', gender: 'female', breed: '三花' },
    { number: '035', gender: 'female', breed: '玳瑁' },
    { number: '036', gender: 'female', breed: '狸花/简州' },
    { number: '037', gender: 'female', breed: '玳瑁' },
    { number: '038', gender: 'female', breed: '狸花/简州' },
    { number: '039', gender: 'female', breed: '玳瑁' },
    { number: '040', gender: 'female', breed: '美短' },


    { number: '041', gender: 'female', breed: '橘猫/橘白' },
    { number: '042', gender: 'female', breed: '三花' },
    { number: '043', gender: 'female', breed: '玳瑁' },
    { number: '044', gender: 'female', breed: '三花' },
    { number: '045', gender: 'female', breed: '三花' },
    { number: '046', gender: 'female', breed: '玳瑁' },
    { number: '047', gender: 'female', breed: '狸花/简州' },
    { number: '048', gender: 'female', breed: '橘猫/橘白' },
    { number: '049', gender: 'female', breed: '玳瑁' },
    { number: '050', gender: 'female', breed: '三花' },
    { number: '051', gender: 'female', breed: '三花' },
    { number: '052', gender: 'female', breed: '玳瑁' },
    { number: '053', gender: 'female', breed: '狸花/简州' },

    // 后57只公猫
    { number: '054', gender: 'male', breed: '橘猫/橘白' },
    { number: '055', gender: 'male', breed: '橘猫/橘白' },
    { number: '056', gender: 'male', breed: '橘猫/橘白' },
    { number: '057', gender: 'male', breed: '狸花/简州' },
    { number: '058', gender: 'male', breed: '狸花/简州' },
    { number: '059', gender: 'male', breed: '狸花/简州' },
    { number: '060', gender: 'male', breed: '狸花/简州' },

    { number: '061', gender: 'male', breed: '狸花/简州' },
    { number: '062', gender: 'male', breed: '狸花/简州' },
    { number: '063', gender: 'male', breed: '橘猫/橘白' },
    { number: '064', gender: 'male', breed: '橘猫/橘白' },
    { number: '065', gender: 'male', breed: '白猫' },
    { number: '066', gender: 'male', breed: '狸花/简州' },
    { number: '067', gender: 'male', breed: '橘猫/橘白' },
    { number: '068', gender: 'male', breed: '美短' },
    { number: '069', gender: 'male', breed: '橘猫/橘白' },
    { number: '070', gender: 'male', breed: '奶牛' },

    { number: '071', gender: 'male', breed: '美短' },
    { number: '072', gender: 'male', breed: '橘猫/橘白' },
    { number: '073', gender: 'male', breed: '狸花/简州' },
    { number: '074', gender: 'male', breed: '橘猫/橘白' },
    { number: '075', gender: 'male', breed: '橘猫/橘白' },
    { number: '076', gender: 'male', breed: '狸花/简州' },
    { number: '077', gender: 'male', breed: '狸花/简州' },
    { number: '078', gender: 'male', breed: '奶牛' },
    { number: '079', gender: 'male', breed: '奶牛' },
    { number: '080', gender: 'male', breed: '奶牛' },

    { number: '081', gender: 'male', breed: '奶牛' },
    { number: '082', gender: 'male', breed: '橘猫/橘白' },
    { number: '083', gender: 'male', breed: '橘猫/橘白' },
    { number: '084', gender: 'male', breed: '奶牛' },
    { number: '085', gender: 'male', breed: '狸花/简州' },
    { number: '086', gender: 'male', breed: '狸花/简州' },
    { number: '087', gender: 'male', breed: '奶牛' },
    { number: '088', gender: 'male', breed: '美短' },
    { number: '089', gender: 'male', breed: '橘猫/橘白' },
    { number: '090', gender: 'male', breed: '其他' },

    { number: '091', gender: 'male', breed: '狸花/简州' },
    { number: '092', gender: 'male', breed: '橘猫/橘白' },
    { number: '093', gender: 'male', breed: '狸花/简州' },
    { number: '094', gender: 'male', breed: '奶牛' },
    { number: '095', gender: 'male', breed: '橘猫/橘白' },
    { number: '096', gender: 'male', breed: '白猫' },
    { number: '097', gender: 'male', breed: '橘猫/橘白' },
    { number: '098', gender: 'male', breed: '橘猫/橘白' },
    { number: '099', gender: 'male', breed: '黑猫' },
    { number: '100', gender: 'male', breed: '白猫' },

    { number: '101', gender: 'male', breed: '橘猫/橘白' },
    { number: '102', gender: 'male', breed: '橘猫/橘白' },
    { number: '103', gender: 'male', breed: '奶牛' },
    { number: '104', gender: 'male', breed: '白猫' },
    { number: '105', gender: 'male', breed: '橘猫/橘白' },
    { number: '106', gender: 'male', breed: '橘猫/橘白' },
    { number: '107', gender: 'male', breed: '奶牛' },
    { number: '108', gender: 'male', breed: '狸花/简州' },
    { number: '109', gender: 'male', breed: '狸花/简州' },
    { number: '110', gender: 'male', breed: '橘猫/橘白' },  

     //医院新增猫咪
     { number: '111', gender: 'male', breed: '美短' },
     { number: '112', gender: 'male', breed: '其他' },
     { number: '113', gender: 'female', breed: '其他' },
     { number: '114', gender: 'male', breed: '橘猫/橘白' },
     { number: '115', gender: 'female', breed: '白猫' },
     { number: '116', gender: 'male', breed: '狸花/简州' },
     { number: '117', gender: 'male', breed: '其他' },
     { number: '118', gender: 'male', breed: '黑猫' },
     { number: '119', gender: 'male', breed: '黑猫' },
     { number: '120', gender: 'male', breed: '美短' },
     { number: '121', gender: 'male', breed: '其他' },
     { number: '122', gender: 'male', breed: '橘猫/橘白' },
     { number: '123', gender: 'male', breed: '橘猫/橘白' },
     { number: '124', gender: 'male', breed: '橘猫/橘白' },
     { number: '125', gender: 'female', breed: '其他' },
     { number: '126', gender: 'female', breed: '三花' },
     { number: '127', gender: 'female', breed: '三花' },
     { number: '128', gender: 'female', breed: '奶牛' },
     { number: '129', gender: 'female', breed: '橘猫/橘白' },
     { number: '130', gender: 'female', breed: '白猫' },
     { number: '131', gender: 'female', breed: '黑猫' },
     { number: '132', gender: 'male', breed: '美短' },
     { number: '133', gender: 'male', breed: '美短' },
     { number: '134', gender: 'male', breed: '橘猫/橘白' },
     { number: '135', gender: 'female', breed: '橘猫/橘白' },
     { number: '136', gender: 'female', breed: '白猫' },
     { number: '137', gender: 'female', breed: '玳瑁' },
     { number: '138', gender: 'male', breed: '狸花/简州' },
     { number: '139', gender: 'female', breed: '白猫' },
     { number: '140', gender: 'male', breed: '橘猫/橘白' },

];

// 全局变量
let allCats = [];
let filteredCats = [];
let currentPage = 0;
const catsPerPage = 12;
let isLoading = false;

// 检测是否为iOS设备
function isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) || 
           (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
}

// 检测是否为Safari浏览器
function isSafari() {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}

// iOS视频播放优化函数
function playVideoIOS(video, onSuccess, onError) {
    // 确保视频元素准备就绪
    if (video.readyState < 2) {
        video.load();
    }
    
    // 设置视频源
    if (!video.src) {
        const source = video.querySelector('source');
        if (source) {
            video.src = source.src;
        }
    }
    
    // 尝试播放
    const playPromise = video.play();
    
    if (playPromise !== undefined) {
        playPromise.then(() => {
            if (onSuccess) onSuccess();
        }).catch(error => {
            console.log('iOS视频播放失败:', error);
            if (onError) onError(error);
        });
    } else {
        // 旧版浏览器
        if (onSuccess) onSuccess();
    }
}

// DOM 元素
const catsGrid = document.getElementById('cats-grid');
const genderFilter = document.getElementById('gender-filter');
const breedFilter = document.getElementById('breed-filter');
const loadMoreBtn = document.getElementById('load-more');
const modal = document.getElementById('cat-modal');
const closeModal = document.querySelector('.close');
const totalCount = document.getElementById('total-count');
const maleCount = document.getElementById('male-count');
const femaleCount = document.getElementById('female-count');

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeCatsData();
    setupEventListeners();
    loadCats();
    updateStats();
});

// 初始化猫咪数据
function initializeCatsData() {
    catsData.forEach((catData, index) => {
        const catNumber = catData.number.padStart(3, '0'); // 确保编号是3位数
        
        allCats.push({
            id: index + 1,
            number: catNumber,
            gender: catData.gender,
            breed: catData.breed,
            imageUrl: `https://gitee.com/xeoon/gogokitty/raw/master/images/cat-${catNumber}.jpg`,
            videoUrl: `https://gitee.com/xeoon/gogokitty/raw/master/videos/cat-${catNumber}.mp4`,
            title: `猫咪 #${catNumber}`
        });
    });
    
    filteredCats = [...allCats];
}


// 设置事件监听器
function setupEventListeners() {
    // 筛选器事件
    genderFilter.addEventListener('change', filterCats);
    breedFilter.addEventListener('change', filterCats);
    
    // 加载更多按钮
    loadMoreBtn.addEventListener('click', loadMoreCats);
    
    // 模态框事件
    closeModal.addEventListener('click', closeModalHandler);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModalHandler();
        }
    });
    
    // 键盘事件
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModalHandler();
        }
    });
}

// 筛选猫咪
function filterCats() {
    const selectedGender = genderFilter.value;
    const selectedBreed = breedFilter.value;
    
    filteredCats = allCats.filter(cat => {
        const genderMatch = selectedGender === 'all' || cat.gender === selectedGender;
        const breedMatch = selectedBreed === 'all' || cat.breed === selectedBreed;
        return genderMatch && breedMatch;
    });
    
    currentPage = 0;
    catsGrid.innerHTML = '';
    loadCats();
    updateStats();
}

// 加载猫咪卡片
function loadCats() {
    const startIndex = currentPage * catsPerPage;
    const endIndex = startIndex + catsPerPage;
    const catsToShow = filteredCats.slice(startIndex, endIndex);
    
    catsToShow.forEach(cat => {
        const catCard = createCatCard(cat);
        catsGrid.appendChild(catCard);
    });
    
    // 更新加载更多按钮状态
    loadMoreBtn.style.display = endIndex >= filteredCats.length ? 'none' : 'block';
}

// 加载更多猫咪
function loadMoreCats() {
    if (isLoading) return;
    
    isLoading = true;
    loadMoreBtn.innerHTML = '<span class="loading"></span> 加载中...';
    loadMoreBtn.disabled = true;
    
    // 模拟加载延迟
    setTimeout(() => {
        currentPage++;
        loadCats();
        isLoading = false;
        loadMoreBtn.innerHTML = '加载更多';
        loadMoreBtn.disabled = false;
    }, 500);
}

// 创建猫咪卡片
function createCatCard(cat) {
    const card = document.createElement('div');
    card.className = 'cat-card';
    card.dataset.catId = cat.id;
    
    const genderText = cat.gender === 'male' ? '公猫' : '母猫';
    
    card.innerHTML = `
        <div class="cat-image-container">
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23f0f0f0'/%3E%3C/svg%3E" 
                 data-src="${cat.imageUrl}" 
                 alt="猫咪 #${cat.number}" 
                 class="cat-image cat-image-placeholder"
                 loading="lazy">
            <div class="cat-number">#${cat.number}</div>
        </div>
        <div class="cat-info">
            <h3 class="cat-title">${cat.title}</h3>
            <div class="cat-tags">
                <span class="tag gender-${cat.gender}">${genderText}</span>
                <span class="tag breed">${cat.breed}</span>
            </div>
        </div>
    `;
    
    // 添加点击事件
    card.addEventListener('click', () => openModal(cat));
    
    // 懒加载图片
    const img = card.querySelector('.cat-image');
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('cat-image-placeholder');
                    imageObserver.unobserve(img);
                }
            });
        });
        imageObserver.observe(img);
    } else {
        // 降级处理
        img.src = img.dataset.src;
        img.classList.remove('cat-image-placeholder');
    }
    
    return card;
}

// 确保视频元素具有iOS必需的属性
function ensureVideoIOSCompatibility(video) {
    if (!video) return;
    
    // 添加iOS必需的属性
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');
    video.setAttribute('muted', '');
    video.setAttribute('loop', '');
    
    // 根据设备类型设置预加载策略
    if (isIOS()) {
        video.setAttribute('preload', 'metadata');
    } else {
        video.setAttribute('preload', 'none');
    }
}

// 打开模态框
// 在打开模态框函数中，添加切换图片和视频的逻辑
function openModal(cat) {
    const modalImage = document.getElementById('modal-cat-image');
    const modalVideo = document.getElementById('modal-cat-video');
    const modalTitle = document.getElementById('modal-cat-title');
    const modalGender = document.getElementById('modal-cat-gender');
    const modalBreed = document.getElementById('modal-cat-breed');

    // 确保视频元素具有iOS兼容性
    ensureVideoIOSCompatibility(modalVideo);

    // 设置模态框内容
    modalImage.src = cat.imageUrl;
    modalVideo.src = cat.videoUrl;
    modalTitle.textContent = cat.title;
    modalGender.textContent = cat.gender === 'male' ? '公猫' : '母猫';
    modalGender.className = `tag gender-${cat.gender}`;
    modalBreed.textContent = cat.breed;
    modalBreed.className = 'tag breed';

    // 显示图片，隐藏视频
    modalImage.style.display = 'block';
    modalVideo.style.display = 'none';

    // 添加播放按钮覆盖层
    let playButton = document.querySelector('.play-button-overlay');
    if (!playButton) {
        playButton = document.createElement('div');
        playButton.className = 'play-button-overlay';
        playButton.title = '点击播放视频';
        document.querySelector('.cat-images').appendChild(playButton);
    }
    playButton.style.display = 'block';

    // 添加点击图片播放视频的功能 - iOS优化版本
    const playVideo = function() {
        modalImage.style.display = 'none';
        modalVideo.style.display = 'block';
        playButton.style.display = 'none';
        
        // 使用iOS优化播放函数
        playVideoIOS(modalVideo, 
            // 播放成功回调
            () => {
                console.log('视频播放成功');
            },
            // 播放失败回调
            (error) => {
                console.log('视频播放失败:', error);
                // 播放失败，恢复显示图片
                modalVideo.style.display = 'none';
                modalImage.style.display = 'block';
                playButton.style.display = 'block';
                
                // 显示错误提示
                if (error.name === 'NotAllowedError') {
                    console.log('用户需要手动点击播放视频');
                } else if (error.name === 'NotSupportedError') {
                    console.log('视频格式不支持');
                }
            }
        );
    };

    modalImage.onclick = playVideo;
    playButton.onclick = playVideo;

    // 视频结束时重新显示图片
    modalVideo.onended = function() {
        modalVideo.style.display = 'none';
        modalImage.style.display = 'block';
        playButton.style.display = 'block';
        modalVideo.pause();
    };

    // 视频点击时暂停并显示播放按钮
    modalVideo.onclick = function() {
        if (!modalVideo.paused) {
            modalVideo.pause();
        }
        modalVideo.style.display = 'none';
        modalImage.style.display = 'block';
        playButton.style.display = 'block';
    };

    // 添加视频错误处理
    modalVideo.addEventListener('error', (e) => {
        console.log('视频加载错误:', e);
        // 隐藏视频，显示图片
        modalVideo.style.display = 'none';
        modalImage.style.display = 'block';
        playButton.style.display = 'block';
    });
    
    // 添加视频加载完成事件
    modalVideo.addEventListener('loadeddata', () => {
        console.log('视频数据加载完成');
    });
    
    // 添加视频可以播放事件
    modalVideo.addEventListener('canplaythrough', () => {
        console.log('视频可以播放');
    });

    // 显示模态框
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';

    // 重置视频
    modalVideo.pause();
    modalVideo.currentTime = 0;
}



// 关闭模态框

// 修改 closeModalHandler 函数
function closeModalHandler() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';

    // 停止视频播放
    const modalVideo = document.getElementById('modal-cat-video');
    modalVideo.pause();
    modalVideo.currentTime = 0;

    // 隐藏播放按钮
    const playButton = document.querySelector('.play-button-overlay');
    if (playButton) {
        playButton.style.display = 'none';
    }
}

// 更新统计信息
function updateStats() {
    const total = filteredCats.length;
    const male = filteredCats.filter(cat => cat.gender === 'male').length;
    const female = filteredCats.filter(cat => cat.gender === 'female').length;
    
    totalCount.textContent = total;
    maleCount.textContent = male;
    femaleCount.textContent = female;
}

// 工具函数：防抖
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

// 优化滚动性能
const debouncedScroll = debounce(() => {
    // 可以在这里添加滚动相关的优化逻辑
}, 100);

window.addEventListener('scroll', debouncedScroll);

// 预加载关键资源
function preloadCriticalResources() {
    // 预加载前几张图片
    const criticalImages = allCats.slice(0, 4);
    criticalImages.forEach(cat => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = cat.imageUrl;
        document.head.appendChild(link);
    });
}

// 页面加载完成后预加载关键资源
window.addEventListener('load', preloadCriticalResources);

// 错误处理
window.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"%3E%3Crect width="300" height="200" fill="%23f0f0f0"/%3E%3Ctext x="150" y="100" text-anchor="middle" fill="%23999"%3E图片加载失败%3C/text%3E%3C/svg%3E';
    }
});

// 性能监控
if ('performance' in window) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log('页面加载时间:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
        }, 0);
    });
}


