export interface AdminUser {
  id: string;
  username: string;
  passwordHash: string;
  role: string;
}

export interface AppData {
  id: string;
  name: string;
  short: string;
  color: string;
  visible: boolean;
  isSpecial?: boolean;
  description?: string;
  iconUrl?: string;
}

export interface Order {
  id: string;
  customerEmail: string;
  amount: number;
  currency: string;
  status: 'paid' | 'pending' | 'failed';
  date: string;
  paymentId: string;
  metadata?: any;
}

export interface Settings {
  storeName: string;
  supportEmail: string;
  whatsappNumber: string;
  maintenanceMode: boolean;
  socials: {
    instagram: string;
    facebook: string;
    youtube: string;
    twitter: string;
  };
  showSocials: {
    instagram: boolean;
    facebook: boolean;
    youtube: boolean;
    twitter: boolean;
  };
}
