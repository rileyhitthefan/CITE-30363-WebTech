window.onload = function() {
    let ans = {
        one: null,
        two: null,
        three: null
    };

    const resetBtn = document.getElementById("reset")
    const resultTitle = document.querySelector(".result-title")
    const resultContent = document.querySelector(".result-content")

    function select(event) {
        const item = event.currentTarget
        const question = item.getAttribute("data-question-id")
        const choice = item.getAttribute("data-choice-id")

        ans[question] = choice

        document.querySelectorAll(`[data-question-id="${question}"]`).forEach(otherItem => {
            otherItem.classList.remove("blur");
            otherItem.querySelector(".checkbox").src = "images/unchecked.png"
        })

        item.querySelector(".checkbox").src = "images/checked.png"
        item.classList.add("selected")

        document.querySelectorAll(`[data-question-id="${question}"]`).forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.add("blur")
            }
        })

        if (ans.one && ans.two && ans.three) {
            disableSelect()
            showResult()
        }
    }

    function disableSelect() {
        document.querySelectorAll(".choice-grid-item").forEach(item => {
            item.removeEventListener("click", select)
            item.classList.add("disabled")
        })
    }

    function showResult() {
        let result = null

        if (ans["one"] == ans["two"] || ans["one"] == ans["three"]) {
            result = ans["one"]
        }
        else if (ans["two"] == ans["three"]) {
            result = ans["two"]
        }
        else if (ans["one"] != ans["two"] != ans["three"]){
            result = ans["one"]
        }

        resultTitle.innerHTML = RESULTS_MAP[result].title
        resultContent.innerHTML = RESULTS_MAP[result].contents

        console.log(ans)
        console.log(result)

        // Show the reset button
        resetBtn.style.display = "block"
    }

    // Reset the quiz
    function resetQuiz() {
        // Clear answers
        ans = {one: null, two: null, three: null}

        // Reset all choices
        document.querySelectorAll(".choice-grid-item").forEach(item => {
            item.classList.remove("blur", "disabled", "selected")
            item.querySelector(".checkbox").src = "images/unchecked.png"
            item.addEventListener("click", select)
        });

        // Scroll to the top of the page
        window.scrollTo(0, 0)

        // Clear result text
        resultTitle.innerHTML = ""
        resultContent.innerHTML = ""
        
        // Hide reset button
        resetBtn.style.display = "none"
    }

    document.querySelectorAll('[data-question-id="one"], [data-question-id="two"], [data-question-id="three"]').forEach(item => {
        item.addEventListener("click", select)
    })

    resetBtn.addEventListener("click", resetQuiz)
    resetBtn.style.display = "none"
}
