import { ReactNode } from 'react';

export interface Mode {
  id: string;
  title: string;
  icon: ReactNode;
  description: string;
  formLink: string;
  detailsText: string;
  info: {
    label: string;
    value: string;
  }[];
  rules: string[];
}