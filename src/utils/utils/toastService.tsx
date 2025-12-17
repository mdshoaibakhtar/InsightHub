import {
  faCheckCircle,
  faTimesCircle,
  faExclamationTriangle,
  faInfoCircle,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { HStack } from '@/components/ui/hstack';
import { Toast, ToastDescription, useToast } from '@/components/ui/toast';

type ToastType = 'success' | 'error' | 'warning' | 'info';

const iconMap: Record<ToastType, IconDefinition> = {
  success: faCheckCircle,
  error: faTimesCircle,
  warning: faExclamationTriangle,
  info: faInfoCircle,
};

export const useToastService = () => {
  const toast = useToast();

  const showToast = (type: ToastType, message: string) => {
    toast.show({
      placement: 'top',
      duration: 3000,
      render: () => (
        <Toast variant='solid' action={type}>
          <Grid direction={'row'}  className='items-center gap-2'>
            <FontAwesomeIcon icon={iconMap[type]} style={{ color: 'white', fontSize: 20 }} />
            <ToastDescription>{message}</ToastDescription>
          </Grid>
        </Toast>
      ),
    });
  };

  return {
    success: (message: string) => showToast('success', message),
    error: (message: string) => showToast('error', message),
    warning: (message: string) => showToast('warning', message),
    info: (message: string) => showToast('info', message),
  };
};
