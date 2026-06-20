// ===== Supabase Configuration =====
const supabaseUrl = "https://rfivoxtltkkxhqhloznt.supabase.co";
const supabaseKey = "sb_publishable_gRhccXkSibqx9A6T5uAUSA_xPfw-EsL";

const supabaseClient = supabase.createClient(
    supabaseUrl,
    supabaseKey
);

// ===== Pages =====
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");
const page4 = document.getElementById("page4");

// ===== Page Navigation =====
window.showPage2 = function () {
    page1.classList.add("hidden");
    page2.classList.remove("hidden");
};

window.showPage3 = function () {

    const date = document.getElementById("date").value;

    if (date === "") {
        alert("Please select a date ❤️");
        return;
    }

    page2.classList.add("hidden");
    page3.classList.remove("hidden");
};

// ===== Save Response =====
window.submitResponse = async function (mood) {

    const date = document.getElementById("date").value;

    try {

        const { data, error } = await supabaseClient
            .from("responses")
            .insert([
                {
                    selected_date: date,
                    mood: mood
                }
            ]);

        if (error) {
            console.log(error);
            alert("Error saving response");
            return;
        }

        page3.classList.add("hidden");
        page4.classList.remove("hidden");

    }
    catch (err) {
        console.log(err);
        alert("Something went wrong");
    }
};

// ===== Moving No Button =====
const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {

    noBtn.style.position = "absolute";

    noBtn.style.top = Math.random() * 80 + "%";

    noBtn.style.left = Math.random() * 80 + "%";

});
