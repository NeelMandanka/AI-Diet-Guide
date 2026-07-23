import jsPDF from "jspdf";
import type { DietPlan } from "@/types/diet";

export function downloadDietPDF(plan: DietPlan) {
  const doc = new jsPDF();

  let y = 20;

  doc.setFontSize(20);
  doc.text(plan.title, 15, y);

  y += 10;

  doc.setFontSize(12);
  doc.text(`Goal: ${plan.goal}`, 15, y);

  y += 8;

  doc.text(
    `Generated: ${new Date(plan.created_at).toLocaleDateString()}`,
    15,
    y
  );

  y += 15;

  // Nutrition Summary
  const totals = plan.meals.reduce(
    (acc, meal) => ({
      calories: acc.calories + meal.calories,
      protein: acc.protein + meal.protein,
      carbs: acc.carbs + meal.carbohydrates,
      fat: acc.fat + meal.fat,
    }),
    {
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
    }
  );

  doc.setFontSize(16);
  doc.text("Nutrition Summary", 15, y);

  y += 8;

  doc.setFontSize(12);

  doc.text(`Calories: ${totals.calories} kcal`, 15, y);
  y += 7;

  doc.text(`Protein: ${totals.protein} g`, 15, y);
  y += 7;

  doc.text(`Carbohydrates: ${totals.carbs} g`, 15, y);
  y += 7;

  doc.text(`Fat: ${totals.fat} g`, 15, y);

  y += 15;

  // Meals
  doc.setFontSize(16);
  doc.text("Meals", 15, y);

  y += 10;

  plan.meals.forEach((meal) => {
    if (y > 260) {
      doc.addPage();
      y = 20;
    }

    doc.setFontSize(14);
    doc.text(`${meal.meal_type} - ${meal.title}`, 15, y);

    y += 7;

    doc.setFontSize(11);

    doc.text(`Calories: ${meal.calories}`, 18, y);
    y += 6;

    doc.text(`Protein: ${meal.protein} g`, 18, y);
    y += 6;

    doc.text(`Carbs: ${meal.carbohydrates} g`, 18, y);
    y += 6;

    doc.text(`Fat: ${meal.fat} g`, 18, y);
    y += 8;

    const recipeLines = doc.splitTextToSize(
      meal.recipe,
      170
    );

    doc.text(recipeLines, 18, y);

    y += recipeLines.length * 6 + 10;
  });

  if (y > 220) {
    doc.addPage();
    y = 20;
  }

  doc.setFontSize(16);
  doc.text("Grocery List", 15, y);

  y += 10;

  doc.setFontSize(11);

  plan.grocery_items.forEach((item) => {
    doc.text(
      `• ${item.item_name} (${item.quantity})`,
      18,
      y
    );

    y += 6;

    if (y > 280) {
      doc.addPage();
      y = 20;
    }
  });

  doc.save("AI_Diet_Plan.pdf");
}