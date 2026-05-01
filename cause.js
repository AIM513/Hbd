// 1. The Letter Content
const letterData = {
    text: `You are the best person I could ever imagine spending my life with, the way you get me the way you make me feel always feels surreal. 

    From the way you tuck your hair behind your ears, the way you put pressure on ur hand and wrist while thinking so much so that it gives you calluses. I cant imagine a life without you. 

    While I'm writing this youre begging me to tell you your birthday surprise, and you just made me blush by telling me how you fell for me (flirt). I'll love you till the death of me, FOREVAAAAHHHHHH AND EVAAAHHHH. 

    Going through exams and projects have been difficult for the both of us due to the lack of time we get to spend together, but youve been there as my moral support from day one and always been proud of me. You are the main reason I've never given up or felt sad, you're always there to cheer me up. 

    And now with this website, I dont just want to celebrate your 17th birthday (JS ONE MORE YEAR TILL UR 18) but also our 6-month anniversary, and I'll update this website every year near your birthday to celebrate the moments we've had together. 

    I Love You to the Moon and Back My Kanmani.💖`,
    photo: "Letter.png" // Ensure this image is in your folder!
};

// 2. Initialize Letter (Only runs if 'reasons-container' exists)
function initLetter() {
    const container = document.getElementById('reasons-container');
    if (!container) return; // Skip if we are on the Gallery page

    const card = document.createElement('div');
    card.className = 'reason-card';
    
    card.innerHTML = `
        <div class="reason-text">${letterData.text}</div>
        <div class="gif-overlay"><img src="${letterData.photo}"></div>
    `;
    
    container.appendChild(card);

    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 80%",
        },
        opacity: 0,
        y: 100,
        duration: 1.5
    });
}

// 3. Floating Emojis
function createFloatingElement() {
    const emojis = ['🌸', '✨', '💖', '🦋', '⭐', '❤️'];
    const el = document.createElement('div');
    el.className = 'floating';
    el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    el.style.left = Math.random() * 100 + 'vw';
    el.style.top = '100vh';
    el.style.fontSize = (Math.random() * 20 + 15) + 'px';
    document.body.appendChild(el);

    gsap.to(el, {
        y: -1200,
        x: (Math.random() - 0.5) * 200,
        duration: Math.random() * 5 + 5,
        opacity: 0,
        onComplete: () => el.remove()
    });
}

// 4. Button Animation
function animateButton() {
    const btn = document.querySelector(".gallery-button");
    if (!btn) return;

    gsap.from(btn, {
        scrollTrigger: {
            trigger: btn,
            start: "top 95%",
        },
        scale: 0,
        opacity: 0,
        duration: 1,
        ease: "elastic.out(1, 0.5)"
    });
}

// 5. Music Toggle Logic
function setupMusic() {
    const music = document.getElementById('bg-music');
    const musicBtn = document.getElementById('music-toggle');

    if (musicBtn && music) {
        musicBtn.addEventListener('click', () => {
            if (music.paused) {
                music.play().catch(error => {
                    console.log("Music play failed:", error);
                });
                musicBtn.innerHTML = "⏸ Stop Music";
                musicBtn.style.background = "#ff69b4";
                musicBtn.style.color = "white";
            } else {
                music.pause();
                musicBtn.innerHTML = "🎵 Play Our Song";
                musicBtn.style.background = "white";
                musicBtn.style.color = "#ff69b4";
            }
        });
    }
}

// 6. Custom Cursor
const cursor = document.querySelector('.custom-cursor');
if (cursor) {
    document.addEventListener('mousemove', (e) => {
        gsap.to(cursor, { x: e.clientX - 15, y: e.clientY - 15, duration: 0.1 });
    });
}

// --- ON LOAD ---
window.addEventListener('DOMContentLoaded', () => {
    initLetter();
    animateButton();
    setupMusic();
    setInterval(createFloatingElement, 400);
});