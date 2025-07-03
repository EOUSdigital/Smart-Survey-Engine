//TODO 📗 Module 5. Logic and Control Flow - Lesson 11.02: Module Review - Challenge


//TODO 📝 Step 4: 🎓 Capstone Project: Smart Survey Engine

//* 🎯 Project Objective
//  Build a smart survey engine that:
//  • Validates user input
//  • Routes users based on their responses
//  • Handles optional feedback
//  • Applies defaults using logical assignment
//  • Uses loops, conditionals, switch statements, and logic patterns effectively

//* 🛠️ Project Requirements

//? 1. Survey Questions:
//  Ask the user (via object input or prompt simulation):
//  • name (string)
//  • age (number)
//  • wantsNewsletter (boolean)
//  • feedback (optional string)
//  • userType ('guest', 'member', 'admin')

//? 2. Logic to Implement:
//  • Use guard clauses to exit early if required fields are missing (name, age).
//  • If age is falsy or under 13, show a rejection message.
//  • Use switch to personalize the response by userType.
//  • Use ||= or ??= to apply default settings like wantsNewsletter = false.
//  • If feedback is provided (truthy), print it out.
//  • Use ternary operators for concise decisions (e.g., welcome message).
//  • Track how many total responses were processed using a loop (simulate multiple users).

//* 🧪 Sample Data (Simulated)

const users2 = [
    {
        name: "Alice",
        age: 30,
        userType: "admin",
        wantsNewsletter: true,
        feedback: "Love the platform!"
    },
    {
        name: "",
        age: 17,
        userType: "guest",
        feedback: ""
    },
    {
        name: "Bob",
        age: 12,
        userType: "member"
    }
];

//* ✅ Expected Output

//  ✅ Welcome, Alice (admin)
//  📬 Newsletter Subscribed
//  💬 Feedback: Love the platform!

//  ⚠️ Missing name or age

//  ❌ Sorry, Bob. You must be 13 or older.


//* 🧠 Reflection Prompts
//  • Where did control flow help reduce complexity?
//  • How did logical assignment simplify defaulting values?
//  • Could your survey system adapt to more user roles easily? Why or why not?

//* 📦 Bonus Features (Optional)
//  • Support input from prompt() if in a browser
//  • Track stats: how many admins, members, and guests participated
//  • Save survey results in an array for analysis


//? ☑️ Pseudocode

//  DEFINE FUNCTION survey(users)
//      SET totalResponses TO 0
//      SET stats TO object with guest, member, admin keys all set to 0

//      FOR EACH user IN users
//          IF user.name is falsy OR user.age is undefined
//              PRINT "⚠️ Your name or age is missing."
//              CONTINUE

//          IF user.age is less than 13
//             PRINT "❌ Sorry, [name]. You must be 13 or older."
//             CONTINUE

//          SET user.userType TO 'guest' IF falsy
//          SET user.wantsNewsletter TO false IF undefined

//          IF user.wantsNewsletter
//              PRINT "📬 Newsletter Subscribed"

//          SWITCH user.userType
//              CASE 'guest': PRINT guest message; BREAK
//              CASE 'member': PRINT member message; BREAK
//              CASE 'admin': PRINT admin message; BREAK
//              DEFAULT: PRINT "Unknown role."

//          IF user.feedback is truthy
//              PRINT feedback

//          SET greeting TO user.name ? "Welcome, [name]" : "Welcome, Guest"
//              PRINT greeting

//          INCREMENT stats[user.userType]
//          INCREMENT totalResponses
//          PRINT success message for this user

//      PRINT survey summary stats
//      RETURN totalResponses

//  SET users TO [
//      {
//          name: "Alice",
//          age: 30,
//          userType: "admin",
//          wantsNewsletter: true,
//          feedback: "Love the platform!"
//      },
//      {
//          name: "",
//          age: 17,
//          userType: "guest",
//          feedback: ""
//      },
//      {
//          name: "Bob",
//          age: 12,
//          userType: "member"
//      }
//  ]

//  SET total TO survey(users)
//  PRINT total


//! Solution

const summary = survey(users);

function survey(users) {
    let totalResponses = 0;
    let stats = { admin: 0, member: 0, guest: 0 };

    for (const user of users) {
        // Guard clause for missing name or age
        if (!user.name || user.age === undefined) {
            console.log("⚠️ Your name or age is missing.\n");
            continue;
        }

        // Age restricted
        if (user.age < 13) {
            console.log(`❌ Sorry, ${user.name || "user"}. You must be 13 or older.\n`);
            continue;
        }

        // Logical assignment – default fallback
        user.userType ||= "guest";
        user.wantsNewsletter ??= false;

        //  
        if (user.wantsNewsletter) {
            console.log("📬 Newsletter Subscribed");
        }

        // Switch statement for role-based access
        switch (user.userType) {
            case "guest":
                console.log('Thank you for visiting! We would love to hear your thoughts. Please take a moment to complete our survey and help us improve your experience.');
                break;
            case "member":
                console.log('As a valued member, your feedback is important to us. Please take a few minutes to complete our survey and help shape the future of our community.');
                break;
            case "admin":
                console.log('As an admin, your insights are crucial to enhancing our platform. Please participate in this survey to share your expert perspective and help us improve.');
                break;
            default:
                console.log("Unknown role.");
        };

        //  Truthy check
        if (user.feedback) {
            console.log(`💬 Feedback: ${user.feedback}`);
        }

        // Ternary for quick decision
        let greeting = user.name ? `Welcome, ${user.name}` : "Welcome, Guest";
        console.log(greeting);

        // Loop for responses
        stats[user.userType]++;
        totalResponses++;
        console.log(`Successfully processed responses #${totalResponses}. Thank you for your participation!\n`);
    }
    console.log("Survey Summary:", stats);
    return totalResponses;
}

const users = [
    {
        name: "Alice",
        age: 30,
        userType: "admin",
        wantsNewsletter: true,
        feedback: "Love the platform!"
    },
    {
        name: "",
        age: 17,
        userType: "guest",
        feedback: ""
    },
    {
        name: "Bob",
        age: 12,
        userType: "member"
    }
];

const total = survey(users);
console.log(`🧮 Total responses: ${total}`);
