import i18next from 'i18next';
import DocumentationNavigation from '../main/documentation/DocumentationNavigation';

import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';
import authRoles from '../auth/authRoles';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
  {
    id: 'dashboards',
    title: 'Dashboards',
    type: 'item',
    icon: 'heroicons-outline:home',
  },
  {
    id: 'apps.ecommerce',
    title: 'Quản lý danh mục',
    type: 'collapse',
    icon: 'heroicons-outline:shopping-cart',
    children: [
      {
        id: 'e-commerce-products',
        title: 'Danh mục Tour',
        type: 'item',
        url: 'apps/e-commerce/products',
        end: true,
      },
      {
        id: 'e-commerce-product-detail',
        title: 'Danh mục lễ hội',
        type: 'item',
        url: 'apps/e-commerce/products/1/a-walk-amongst-friends-canvas-print',
      },
      {
        id: 'e-commerce-new-product',
        title: 'Danh mục ẩm thực',
        type: 'item',
        url: 'apps/e-commerce/products/new',
      },
    ],
  },
  {
    id: 'apps.file-manager',
    title: 'Quản lý Tour',
    type: 'item',
    icon: 'heroicons-outline:cloud',
    url: 'apps/tour-managerment',
  },
  {
    id: 'apps.mailbox',
    title: 'Quản lý điểm đến',
    type: 'item',
    icon: 'heroicons-outline:mail',
    url: '/apps/mailbox',
  },

  {
    id: 'apps.help-center',
    title: 'Quản lý người dùng',
    type: 'item',
    icon: 'heroicons-outline:support',
    url: '/apps/help-center',
  },

  {
    id: 'apps.notes',
    title: 'Quản lý quận huyện',
    type: 'item',
    icon: 'heroicons-outline:pencil-alt',
    url: '/apps/notes',
  },
  {
    id: 'apps.scrumboard',
    title: 'Quản lý tin tức',
    type: 'item',
    icon: 'heroicons-outline:view-boards',
    url: '/apps/scrumboard',
  },
  {
    id: 'apps.tasks',
    title: 'Đánh giá',
    type: 'item',
    icon: 'heroicons-outline:check-circle',
    url: '/apps/tasks',
  },
];

export default navigationConfig;
