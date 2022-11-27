        // Variables to reference in our functions
        // <!-- Temporary storage to keep up with our user's input on first line below-->
        let usersWord = ""
        let oddList = document.getElementById("odd")
        let evenList = document.getElementById("even")

        // A function that will update this variable when the user types in

        function updateWord(element) {
            usersWord = element.value

            console.log(usersWord)
        }

        // Function that will create a new element (<li>), put the input as its innerText and append it to the Odd List

        function handleSubmit() {
            // this line creates a new LI Element. We'll do this every time a word is submitted so this should stay the same
            let newListItem = document.createElement('LI')

            // this line sticks the user's word into the newly create LI Element so we'll keep this the same, as well.
            newListItem.innerText = usersWord

            // this line below attaches/appends the element to the Odd List !!!THIS IS WHERE THE PROGRAM SHOULD DECIDE IF IT'S EVEN OR ODD!!!
            // oddList.appendChild(newListItem)

            if (usersWord.length % 2 === 0) {
                /*put word in even lists*/
                evenList.appendChild(newListItem)
            } else {
                /*put word in odd list*/
                oddList.appendChild(newListItem)
            }

            // To reset the form and clear the userWord variable
            document.getElementById("even-odd-form").reset()
        }