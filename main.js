document.getElementById("contactForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const botToken = "8006490412:AAGajfE0jzKiDyALvDK1RaRMCHjtzKDg760";
    const chatId = "710763665";
    const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const text = `📩 New Contact Form Message:\n\n👤 Name: ${name}\n📧 Email: ${email}\n📌 Telfon: ${subject}\n📝 Message: ${message}`;

    try {
        const response = await fetch(telegramApiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ chat_id: chatId, text: text })
        });

        if (response.ok) {
            alert("Message sent successfully!");
            document.getElementById("contactForm").reset();
        } else {
            throw new Error("Failed to send message.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Failed to send message.");
    }
});
