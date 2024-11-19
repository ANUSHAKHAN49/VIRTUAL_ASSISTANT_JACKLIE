const btn = document.querySelector(".talk");
const content = document.querySelector('.content');

function speak(text) {
    const text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hour = day.getHours();

    if (hour >= 5 && hour < 12) {
        speak("Good Morning...Anusha..");
    } else if (hour >= 0 && hour < 5) {
        speak("Good Night.....Ma'am")
    } else if (hour >= 12 && hour < 17) {
        speak("Good Afternoon...BossLady..");
    } else {
        speak("Good Evening...Developer..");
    }
}

window.addEventListener('load', () => {
    speak("Initializing Jacklie....");
    wishMe();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());
}

btn.addEventListener('click', () => {
    content.textContent = "Listening.....";
    recognition.start();
});

function takeCommand(message) {
    if (message.includes('hey') || message.includes('hello')) {
        speak("Hello I'm Jacklie  , How may I help you?");
    }

    else if (message.includes('who are you') || message.includes('jacklie who are you')) {
        speak("I' virtual assistant ,Created by Anusha Khan");
    }

    else if (message.includes("play my loop song ")) {
        window.open("https://www.youtube.com/watch?v=9-Vc4xmTZKk");
        speak("Downers at dusk by talha anjum");
    }
    else if (message.includes("open game")) {
        window.open("https://anushakhan49.github.io/TIC_TAC_TOE_GAME/");
        speak("opening TIC TAC TOE game");
    }
    else if (message.includes('tell me your creator birthday')) {
        speak("sure!.....her Birth date is 4th of  september ");
    }
    else if (message.includes("open google")) {
        window.open("https://google.com", "_blank");
        speak("Opening Google...");
    }
    else if (message.includes("open youtube")) {
        window.open("https://youtube.com", "_blank");
        speak("Opening YouTube...");
    }
    else if (message.includes("open github")) {
        window.open("https://github.com/ANUSHAKHAN49", "_blank");
        speak("Opening Your github profile...");
    }

    else if (message.includes("open facebook")) {
        window.open("https://facebook.com", "_blank");
        speak("Opening Facebook...");
    }
    else if (message.includes("open Instagram")) {
        window.open("https://www.instagram.com/", "_blank");
        speak("Opening Instagram...");
    }
    else if (message.includes("open Whatsapp")) {
        window.open("https://web.whatsapp.com/", "_blank");
        speak("opening whatsapp......")
    }

    else if (message.includes('what is') || message.includes('who is') || message.includes('where is')) {
        window.open(`https://www.google.com/search?q=${message.replace("jacqueline", "jacklie", " ", "+")}`, "_blank");
        const finalText = "This is what I found on the internet regarding " + message;
        speak(finalText);
    }

    else if (message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("jacklie", "jacqueline", "wikipedia", "").trim()}`, "_blank");
        const finalText = "This is what I found on Wikipedia regarding " + message;
        speak(finalText);
    }
    
    else if (message.includes('time')) {
        const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" })
        const finalText = time;
        speak(finalText);
    }
    else if (message.includes('date')) {
        const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric" })
        const finalText = date;
        speak(finalText);
    }
    else if (message.includes('open calculator')) {
        window.open('https://anushakhan49.github.io/calculator-/')
        const finalText = "Opening Calculator";
        speak(finalText);
    }
    else if (message.includes('shutdown')) {
        speak("Ok! i take a nap")
    }
    else {
        let finalText = "this is what i found on internet regarding" + message.replace("jacqueline", "") || message.replace("jacklie", "") || message.replace("jacklin", "")

        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("jacqueline", "")}`, "_blank")
    }
}

