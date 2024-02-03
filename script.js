const insights = [
    "Onun en sevdiği şarkıları içeren bir çalma listesi oluşturup paylaşın.",
    "Ona bir video mesaj veya sesli mesaj bırakın ve ona ne kadar özel olduğunu söyleyin.",
    "Onun için kişisel bir doğum günü kartı veya el yapımı bir not hazırlayın ve gönderin.",
    "Beraber geçirdiğiniz güzel anıları fotoğraf veya video şeklinde paylaşın.",
    "Onun için özel bir oyun veya bulmaca hazırlayın.",
    "Gün içinde her saat başı mesaj atarak onu hatırladığınızı gösterin.",
    "Sevgiliniz için güzel bir şiir yazın ve gönderin.",
    "Beraber bir sanat veya el sanatları projesi yapın ve sonucunu ona hediye edin.",
    "Ona El yapımı bir hediye verin.",
    "Ona Masaj Günü Düzenleyin.",
    "O Gün istediği yere gidin.",
    "Onun istediği seri veya filimlerle maraton düzenle.",
    "Onun resmini Çiz ve altına bir not ekle.",
    "1 Saat içinde bir tatlı yap.",
    "2 Saat içinde bütün ev işlerini yap.",
    "1 Gün içerisinde onu şaşırt.",
    "Ertesi Gün yatağına kahvaltı servisi yap.",
    "Zorunda Kalmadıkça Onun Görüş alanından çıkma.",
    "1 Gün boyunca herşey için izin al.",
    "1 Gün boyunca Telefonun komple ona bırak."
];

const insightText = document.getElementById('insight-text');
const generateInsightButton = document.getElementById('generate-insight');

function showInsight() {
    const randomInsight = insights[Math.floor(Math.random() * insights.length)];
    insightText.textContent = randomInsight;
    insightText.classList.add('appear');
    insightText.style.opacity = 1;
    document.getElementById('toggle-rules').classList.add('appear'); // Add animation to Rules button
}

generateInsightButton.addEventListener('click', () => {
    showInsight();
});

document.getElementById('toggle-rules').addEventListener('click', function() {
    var rulesContent = document.getElementById('rules-content');
    if (rulesContent.style.display === 'none' || rulesContent.style.display === '') {
        rulesContent.style.display = 'block';
        this.textContent = 'Önemli';
    } else {
        rulesContent.style.display = 'none';
        this.textContent = 'Önemli';
    }
});




