// 球体がクリックされたときのインタラクション
const sphere = document.querySelector('.sphere');

sphere.addEventListener('click', () => {
    // ここで音が鳴ったり、次の展示へ進むような演出を拡張できます
    console.log('作品がクリックされました。');
    
    // 例：クリックすると少し光が強くなるようなエフェクト
    sphere.style.boxShadow = '0 0 60px rgba(255, 255, 255, 0.3), 0 20px 30px rgba(0, 0, 0, 0.8)';
    
    setTimeout(() => {
        sphere.style.boxShadow = '0 0 40px rgba(255, 255, 255, 0.15), 0 20px 30px rgba(0, 0, 0, 0.8)';
    }, 600);
});