const startDate = new Date("2025-07-15T00:00:00"); // Burayı kendi tarihinize göre ayarlayın

function updateCounter() {
    const now = new Date();
    let diff = now - startDate;

    const seconds = Math.floor(diff / 1000) % 60;
    const minutes = Math.floor(diff / (1000 * 60)) % 60;
    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;

    const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));
    const years = now.getFullYear() - startDate.getFullYear();
    const months = (now.getMonth() - startDate.getMonth()) + (years * 12);
    const days = totalDays % 30;

    document.getElementById("years").innerText = years;
    document.getElementById("months").innerText = months % 12;
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // Yıl dönümü mesajı
    const isAnniversary = now.getDate() === startDate.getDate() &&
                          now.getMonth() === startDate.getMonth();

    document.getElementById("anniversaryMessage").innerText = isAnniversary
        ? `🎉 Bugün yıl dönümümüz! Seni çok seviyorum BEBEĞİMM  ❤️`
        : "";
}

setInterval(updateCounter, 1000);
updateCounter();
