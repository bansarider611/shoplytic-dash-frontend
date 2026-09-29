# Shoplytic Insights

Build ONLY the frontend for a premium retail analytics product called “Shoplytic”.

IMPORTANT:
- Frontend only. Use mock data.
- No backend/database/auth yet.
- Make it API-ready for a future FastAPI backend.
- Do NOT build a generic admin dashboard.
- The app must start with a beautiful HOME PAGE, then take the shopkeeper to the dashboard after uploading a CSV.

DESIGN:
Soft pastel, light, minimal and premium.
NO dark theme.

Colors:
#FFFDF9 background
#C8B6F0 lavender
#F4B8C4 pink
#F6C6A8 peach
#B8DEC8 mint
#F4DFA3 soft yellow
#B8D7E8 soft blue
#2F2F38 text

Use Inter / Plus Jakarta Sans.
Rounded cards, subtle shadows, thin borders, whitespace, elegant icons and soft pastel charts.
Avoid neon, excessive gradients and clutter.

### 1. BEAUTIFUL HOME PAGE — FIRST SCREEN

Create a polished landing page specifically for shopkeepers.

Navbar:
- Shoplytic logo
- How it works
- Features
- Sign in
- Primary button: “Upload Your Data”

Hero section:

Small badge:
“Simple analytics for your business ✦”

Main heading:
“Your Business, Explained.”

Supporting text:
“Upload your sales CSV and instantly understand what’s selling, who your customers are, and where your business can grow.”

Primary CTA:
“Upload Your Data →”

Secondary CTA:
“See How It Works”

On the right side, show a beautiful floating mini analytics dashboard preview with pastel KPI cards and charts.

Below hero:
“What can Shoplytic tell you?”

Show 4 elegant feature cards:
- Sales Overview
- Product Performance
- Customer Insights
- Smart Recommendations

Then a simple 3-step section:
01 Upload your CSV
02 Shoplytic understands your data
03 Get clear business insights

Finish with a soft CTA:
“Ready to understand your business?”
“Upload your data →”

### 2. CSV UPLOAD PAGE

When the user clicks Upload Your Data, show a dedicated beautiful upload screen.

Heading:
“Let’s understand your business.”

Text:
“Upload your sales data and we’ll automatically analyze what your data can tell you.”

Large drag-and-drop CSV upload area:
“Drop your CSV here”
or
“Browse files”

Show:
✓ Automatic column detection
✓ Data quality check
✓ Sales & product analytics
✓ Customer insights when available

After upload, show a short elegant loading/analyzing state:
“Understanding your business…”

Then navigate to the dashboard using mock data.

### 3. ANALYTICS DASHBOARD

After upload, show the main dashboard.

Sidebar:
- Overview
- Sales
- Products
- Customers
- Segmentation
- Insights
- Data Quality

Top:
“Good morning 👋”
“Here’s what’s happening with your business.”

KPI cards:
- Total Sales
- Total Orders
- Total Profit
- Average Order Value

Main sections:
- Sales trend
- Sales by category
- Top products
- Regional performance
- Recent orders
- Business insights

Add a prominent “What your data is telling you” section with 3–4 pastel insight cards.

### 4. OTHER DASHBOARD PAGES

Sales:
Revenue, profit, trends, category and regional performance.

Products:
Best sellers, low performers, category/subcategory analysis.

Customers:
Customer count, top customers, repeat vs one-time customers.

Segmentation:
Beautiful RFM/K-Means visualization with pastel customer segment cards.

Insights:
Automatically generated business insights and recommendations using mock data.

Data Quality:
Rows, columns, missing values, duplicates, detected columns and quality score.

IMPORTANT:
The UI must be designed as a UNIVERSAL CSV ANALYTICS PRODUCT.
Do not hardcode the interface around the Supermart dataset or any single dataset.

Make the Home → Upload → Dashboard flow feel seamless and premium.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://shoplytic-dash-frontend.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/11fc2490-a6df-4027-baf2-81c4ac5e3586).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
