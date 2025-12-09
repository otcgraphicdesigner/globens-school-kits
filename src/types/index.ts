// Core domain types for Globe Nest Services

export interface School {
  id: string;
  name: string;
  code: string;
  logo?: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  isActive: boolean;
}

export interface AcademicYear {
  id: string;
  year: string; // e.g., "2024-25"
  startDate: Date;
  endDate: Date;
  isCurrent: boolean;
}

export interface ClassLevel {
  id: string;
  name: string; // e.g., "Class 1", "Class 10"
  grade: number;
  schoolId: string;
}

export interface Section {
  id: string;
  name: string; // e.g., "A", "B", "C"
  classId: string;
}

export interface Bundle {
  id: string;
  name: string;
  description: string;
  schoolId: string;
  classId: string;
  academicYearId: string;
  type: 'books' | 'stationery' | 'combined';
  price: number;
  mrp: number;
  discount: number;
  image?: string;
  items: BundleItem[];
  stock: number;
  isActive: boolean;
}

export interface BundleItem {
  id: string;
  bundleId: string;
  productId: string;
  product: Product;
  quantity: number;
}

export interface Product {
  id: string;
  name: string;
  sku: string;
  type: 'book' | 'stationery';
  description: string;
  publisher?: string;
  author?: string;
  isbn?: string;
  image?: string;
  mrp: number;
  hsnCode: string;
  gstRate: number; // in percentage
}

export interface User {
  id: string;
  phone: string;
  email?: string;
  name: string;
  isVerified: boolean;
  createdAt: Date;
}

export interface Ward {
  id: string;
  userId: string;
  name: string;
  schoolId: string;
  classId: string;
  sectionId?: string;
  rollNumber?: string;
}

export interface Address {
  id: string;
  userId: string;
  name: string;
  phone: string;
  line1: string;
  line2?: string;
  city: string;
  state: string;
  pincode: string;
  isDefault: boolean;
}

export interface CartItem {
  id: string;
  bundleId: string;
  bundle: Bundle;
  wardId: string;
  ward: Ward;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  subtotal: number;
  discount: number;
  tax: number;
  shipping: number;
  total: number;
}

export interface Order {
  id: string;
  orderNumber: string;
  userId: string;
  status: OrderStatus;
  items: OrderItem[];
  shippingAddress: Address;
  subtotal: number;
  discount: number;
  tax: number;
  shipping: number;
  total: number;
  paymentId?: string;
  shipmentId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export type OrderStatus = 
  | 'pending'
  | 'confirmed'
  | 'processing'
  | 'shipped'
  | 'delivered'
  | 'cancelled'
  | 'refunded';

export interface OrderItem {
  id: string;
  orderId: string;
  bundleId: string;
  bundle: Bundle;
  wardId: string;
  ward: Ward;
  quantity: number;
  price: number;
}

export interface Payment {
  id: string;
  orderId: string;
  gateway: 'razorpay' | 'payu' | 'cashfree';
  gatewayOrderId: string;
  gatewayPaymentId?: string;
  amount: number;
  status: 'pending' | 'success' | 'failed' | 'refunded';
  createdAt: Date;
}

export interface Shipment {
  id: string;
  orderId: string;
  provider: 'shiprocket' | 'delhivery' | 'xpressbees';
  awbNumber?: string;
  labelUrl?: string;
  trackingUrl?: string;
  status: ShipmentStatus;
  estimatedDelivery?: Date;
  createdAt: Date;
}

export type ShipmentStatus =
  | 'pending'
  | 'manifested'
  | 'picked_up'
  | 'in_transit'
  | 'out_for_delivery'
  | 'delivered'
  | 'rto';

export interface Coupon {
  id: string;
  code: string;
  type: 'percentage' | 'fixed';
  value: number;
  minOrderValue?: number;
  maxDiscount?: number;
  validFrom: Date;
  validTo: Date;
  usageLimit?: number;
  usedCount: number;
  isActive: boolean;
}

// Selection state for the shopping flow
export interface SelectionState {
  school: School | null;
  classLevel: ClassLevel | null;
  section: Section | null;
  ward: Ward | null;
  academicYear: AcademicYear | null;
}
