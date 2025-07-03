# 🎓 Capstone Project – Smart Survey Engine

## 🧠 Objective

Build a smart survey engine that:
- Validates user input using truthy/falsy and guard clauses
- Applies defaults using logical assignment operators
- Responds dynamically based on user role via switch
- Tracks and summarizes responses
- Uses loops, ternary operators, and best-practice logic patterns

---

## ☑️ Pseudocode

```javascript
DEFINE FUNCTION survey(users)
  SET totalResponses TO 0
  SET stats TO object with guest, member, admin keys all set to 0

  FOR EACH user IN users
      IF user.name is falsy OR user.age is undefined
        PRINT "⚠️ Your name or age is missing."
        CONTINUE

      IF user.age is less than 13
        PRINT "❌ Sorry, [name]. You must be 13 or older."
        CONTINUE

      SET user.userType TO 'guest' IF falsy
      SET user.wantsNewsletter TO false IF undefined

      IF user.wantsNewsletter
        PRINT "📬 Newsletter Subscribed"

      SWITCH user.userType
        CASE 'guest': PRINT guest message; BREAK
        CASE 'member': PRINT member message; BREAK
        CASE 'admin': PRINT admin message; BREAK
        DEFAULT: PRINT "Unknown role."

      IF user.feedback is truthy
        PRINT feedback

      SET greeting TO user.name ? "Welcome, [name]" : "Welcome, Guest"
        PRINT greeting

      INCREMENT stats[user.userType]
      INCREMENT totalResponses
      PRINT success message for this user

    PRINT survey summary stats
    RETURN totalResponses

SET users TO [
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
]

SET total TO survey(users)
PRINT total
```

---

## 🧮 JavaScript Solution

```javascript
function survey(users) {
  let totalResponses = 0;
  let stats = { admin: 0, member: 0, guest: 0 };

  for (const user of users) {
    if (!user.name || user.age === undefined) {
      console.log("⚠️ Your name or age is missing.");
      continue;
    }

    if (user.age < 13) {
      console.log(`❌ Sorry, ${user.name || "user"}. You must be 13 or older.`);
      continue;
    }

    user.userType ||= "guest";
    user.wantsNewsletter ??= false;

    if (user.wantsNewsletter) {
      console.log("📬 Newsletter Subscribed");
    }

    switch (user.userType) {
      case "guest":
        console.log("Thank you for visiting! We would love to hear your thoughts...");
        break;
      case "member":
        console.log("As a valued member, your feedback is important to us...");
        break;
      case "admin":
        console.log("As an admin, your insights are crucial...");
        break;
      default:
        console.log("Unknown role.");
    }

    if (user.feedback) {
      console.log(`💬 Feedback: ${user.feedback}`);
    }

    const greeting = user.name ? `Welcome, ${user.name}` : "Welcome, Guest";
    console.log(greeting);

    stats[user.userType]++;
    totalResponses++;

    console.log(`Successfully processed responses #${totalResponses}. Thank you for your participation!`);
  }

  console.log("📊 Survey Summary:", stats);
  return totalResponses;
}
```

---

## 🧪 Sample Input

```javascript
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
```

---

## ✅ Expected Output

```
📬 Newsletter Subscribed
As an admin, your insights are crucial...
💬 Feedback: Love the platform!
Welcome, Alice
Successfully processed responses #1. Thank you for your participation!

⚠️ Your name or age is missing.

❌ Sorry, Bob. You must be 13 or older.

📊 Survey Summary: { admin: 1, member: 0, guest: 0 }
🧮 Total responses: 1
```

---

## 🔍 Logic Patterns Used

- Guard Clauses
- Default Parameters
- Logical Assignment: `||=`, `??=`
- Falsy Checks
- `switch` for role control
- Looping with `for...of`
- Ternary Operators for greetings

---

## 🧠 Reflection Prompts

- Where did short-circuit logic or fallback assignments simplify code?
- What if more roles were added—how might `switch` scale?
- Could this logic eventually support form inputs or real-time feedback?
