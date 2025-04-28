// 부드러운 스크롤 애니메이션
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'  // 부드럽게 스크롤
        });
    });
});

// 고양이 아이콘 클릭 시 모드 전환
document.getElementById('mode-toggle').addEventListener('click', function() {
    // 페이지 HTML 요소에서 dark-mode 클래스 토글
    document.body.classList.toggle('dark-mode');
});

