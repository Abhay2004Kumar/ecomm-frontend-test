# E-Commerce Frontend

A modern, full-featured e-commerce frontend built with Next.js 14, TypeScript, Tailwind CSS, and shadcn/ui components.

## Features

### User Features
- 🔐 **Authentication**: User registration and login with JWT
- 🛍️ **Product Browsing**: Browse all products with images and details
- 🔍 **Product Details**: View detailed product information
- 🛒 **Shopping Cart**: Add, remove, and update cart items
- 💳 **Checkout**: Secure payment processing with Stripe
- 📦 **Order History**: View past orders and their status

### Admin Features
- 📊 **Admin Dashboard**: Centralized management interface
- ➕ **Product Management**: Create, edit, and delete products
- 📸 **Image Upload**: Upload product images
- 📋 **Order Management**: View all customer orders
- 📈 **Inventory Control**: Manage product stock levels

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Payment**: Stripe
- **HTTP Client**: Axios
- **State Management**: React Context API

## Prerequisites

- Node.js 18+ installed
- Backend API running on `http://localhost:3000` (Rails backend)
- Stripe account for payment processing

## Installation

1. **Navigate to the frontend directory:**
   \`\`\`bash
   cd frontend
   \`\`\`

2. **Install dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

3. **Configure environment variables:**
   
   Edit the \`.env.local\` file:
   \`\`\`env
   NEXT_PUBLIC_API_URL=http://localhost:3000/api/v1
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key_here
   \`\`\`

4. **Run the development server:**
   \`\`\`bash
   npm run dev
   \`\`\`

5. **Open your browser:**
   Navigate to [http://localhost:3001](http://localhost:3001)

## Project Structure

\`\`\`
frontend/
├── app/                          # Next.js app directory
│   ├── admin/                    # Admin pages
│   │   ├── orders/              # Order management
│   │   ├── products/            # Product management
│   │   └── page.tsx             # Admin dashboard
│   ├── cart/                     # Shopping cart
│   ├── checkout/                 # Checkout flow
│   ├── login/                    # Login page
│   ├── orders/                   # User order history
│   ├── products/                 # Product pages
│   │   └── [id]/                # Product detail page
│   ├── register/                 # Registration page
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Home page
├── components/                   # React components
│   ├── ui/                      # shadcn/ui components
│   ├── CheckoutForm.tsx         # Stripe checkout form
│   └── Navbar.tsx               # Navigation bar
├── contexts/                     # React contexts
│   └── AuthContext.tsx          # Authentication context
├── lib/                         # Utility functions
│   ├── api.ts                   # API client configuration
│   └── utils.ts                 # Helper functions
├── services/                     # API service layer
│   ├── auth.service.ts          # Authentication API
│   ├── cart.service.ts          # Cart API
│   ├── order.service.ts         # Order API
│   ├── payment.service.ts       # Payment API
│   └── product.service.ts       # Product API
├── types/                       # TypeScript types
│   └── index.ts                 # Type definitions
└── package.json                 # Dependencies
\`\`\`

## API Integration

The frontend integrates with the following backend endpoints:

### Authentication
- \`POST /api/v1/sessions\` - Login
- \`POST /api/v1/users\` - Register

### Products
- \`GET /api/v1/products\` - List all products
- \`GET /api/v1/products/:id\` - Get product details
- \`POST /api/v1/products\` - Create product (Admin)
- \`PUT /api/v1/products/:id\` - Update product (Admin)
- \`DELETE /api/v1/products/:id\` - Delete product (Admin)

### Cart
- \`GET /api/v1/users/:user_id/cart\` - Get user's cart
- \`POST /api/v1/cart_items\` - Add item to cart
- \`PUT /api/v1/cart_items/:id\` - Update cart item
- \`DELETE /api/v1/cart_items/:id\` - Remove cart item

### Orders
- \`POST /api/v1/orders\` - Create order
- \`GET /api/v1/orders\` - Get user's orders

### Payments
- \`POST /api/v1/payments\` - Create payment intent

## Available Scripts

- \`npm run dev\` - Start development server
- \`npm run build\` - Build for production
- \`npm start\` - Start production server
- \`npm run lint\` - Run ESLint

## Key Features Implementation

### Authentication Flow
1. User registers or logs in
2. JWT token stored in localStorage
3. Token automatically attached to API requests
4. AuthContext provides user state globally

### Shopping Flow
1. Browse products → View details
2. Add to cart (requires login)
3. Manage cart items
4. Checkout with Stripe
5. Order created on successful payment

### Admin Flow
1. Access admin dashboard
2. Create/Edit products with image upload
3. View all orders
4. Manage inventory

## Styling

The application uses:
- **Tailwind CSS** for utility-first styling
- **shadcn/ui** for pre-built, accessible components
- **CSS Variables** for theming (light/dark mode ready)
- **Responsive Design** for mobile, tablet, and desktop

## Security

- JWT tokens for authentication
- Secure Stripe payment processing
- Client-side validation
- Protected routes requiring authentication
- HTTPS recommended for production

## Development Notes

1. **Image Handling**: Products support image uploads through Active Storage
2. **Currency**: All prices in INR (₹)
3. **Stripe Test Mode**: Use Stripe test cards for development
4. **CORS**: Ensure backend CORS is configured for frontend URL

## Production Deployment

1. Build the application:
   \`\`\`bash
   npm run build
   \`\`\`

2. Set production environment variables

3. Deploy to your hosting platform (Vercel, Netlify, etc.)

4. Update backend CORS to allow production URL

## Common Issues

**Images not loading:**
- Check \`next.config.js\` image domains configuration
- Verify backend URL in environment variables

**Payment not working:**
- Confirm Stripe publishable key is correct
- Check browser console for Stripe errors

**Authentication fails:**
- Verify backend is running
- Check API_URL in environment variables
- Clear localStorage and try again

## Contributing

This frontend is designed to work with the Rails e-commerce backend. Ensure both applications are properly configured and running.

## License

MIT License
