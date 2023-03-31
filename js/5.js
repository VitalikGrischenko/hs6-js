// Напиши скрипт перевірки підписки користувачапід час доступу до контенту. 
// Є три типи підпистки: free, pro та vip. Отримати доступ можуть тільки pro та vip


const subscriptionType = "free";

if (subscriptionType === "pro" || subscriptionType === "vip") {
  console.log("Ви маєте доступ до контенту.");
} else {
  console.log("Доступ до контенту обмежений. Будь ласка, оновіть підписку на рівень pro або vip.");
}