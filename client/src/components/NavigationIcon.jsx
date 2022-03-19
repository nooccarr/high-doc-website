import React, { Fragment } from 'react';

const NavigationIcon = ({ navItem }) => {
  const renderIcon = () => {
    if (navItem === 'Home') {
      return (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.63069 17.3098V14.7542C7.63067 14.1042 8.16061 13.576 8.81718 13.5717H11.2222C11.882 13.5717 12.4168 14.1011 12.4168 14.7542V14.7542V17.3178C12.4166 17.8697 12.8616 18.3207 13.4189 18.3337H15.0222C16.6206 18.3337 17.9163 17.0509 17.9163 15.4685V15.4685V8.19852C17.9078 7.57602 17.6126 6.99145 17.1147 6.61119L11.6311 2.23808C10.6705 1.47663 9.30484 1.47663 8.34419 2.23808L2.8847 6.61912C2.38489 6.99784 2.08916 7.58338 2.08301 8.20646V15.4685C2.08301 17.0509 3.37874 18.3337 4.9771 18.3337H6.58048C7.15164 18.3337 7.61465 17.8753 7.61465 17.3098V17.3098" stroke="#4928ED" stroke-opacity="0.9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>);
    } else if (navItem === 'Destinations') {
      return (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.16667 2.5C3.25578 2.5 2.5 3.25578 2.5 4.16667V7.5C2.5 8.41089 3.25578 9.16667 4.16667 9.16667H7.5C8.41089 9.16667 9.16667 8.41089 9.16667 7.5V4.16667C9.16667 3.25578 8.41089 2.5 7.5 2.5H4.16667ZM12.5 2.5C11.5891 2.5 10.8333 3.25578 10.8333 4.16667V7.5C10.8333 8.41089 11.5891 9.16667 12.5 9.16667H15.8333C16.7442 9.16667 17.5 8.41089 17.5 7.5V4.16667C17.5 3.25578 16.7442 2.5 15.8333 2.5H12.5ZM4.16667 4.16667H7.5V7.5H4.16667V4.16667ZM12.5 4.16667H15.8333V7.5H12.5V4.16667ZM4.16667 10.8333C3.25578 10.8333 2.5 11.5891 2.5 12.5V15.8333C2.5 16.7442 3.25578 17.5 4.16667 17.5H7.5C8.41089 17.5 9.16667 16.7442 9.16667 15.8333V12.5C9.16667 11.5891 8.41089 10.8333 7.5 10.8333H4.16667ZM12.5 10.8333C11.5891 10.8333 10.8333 11.5891 10.8333 12.5V15.8333C10.8333 16.7442 11.5891 17.5 12.5 17.5H15.8333C16.7442 17.5 17.5 16.7442 17.5 15.8333V12.5C17.5 11.5891 16.7442 10.8333 15.8333 10.8333H12.5ZM4.16667 12.5H7.5V15.8333H4.16667V12.5ZM12.5 12.5H15.8333V15.8333H12.5V12.5Z" fill="#0F1825" fill-opacity="0.6"/>
      </svg>);
    } else if (navItem === 'Audiences') {
      return (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.4" d="M14.9062 9.08142C16.0687 8.91809 16.9637 7.92142 16.9662 6.71392C16.9662 5.52392 16.0987 4.53725 14.9612 4.35059" stroke="#0F1825" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16.4404 11.876C17.5663 12.0443 18.3521 12.4385 18.3521 13.251C18.3521 13.8101 17.9821 14.1735 17.3838 14.4018" stroke="#0F1825" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.90529 12.2207C7.22695 12.2207 4.93945 12.6265 4.93945 14.2474C4.93945 15.8674 7.21279 16.2849 9.90529 16.2849C12.5836 16.2849 14.8703 15.8832 14.8703 14.2615C14.8703 12.6399 12.5978 12.2207 9.90529 12.2207Z" stroke="#0F1825" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M9.90518 9.90699C11.6627 9.90699 13.0877 8.48283 13.0877 6.72449C13.0877 4.96699 11.6627 3.54199 9.90518 3.54199C8.14768 3.54199 6.72268 4.96699 6.72268 6.72449C6.71601 8.47616 8.13018 9.90116 9.88185 9.90699H9.90518Z" stroke="#0F1825" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path opacity="0.4" d="M4.90375 9.08142C3.74042 8.91809 2.84625 7.92142 2.84375 6.71392C2.84375 5.52392 3.71125 4.53725 4.84875 4.35059" stroke="#0F1825" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M3.36967 11.876C2.24384 12.0443 1.45801 12.4385 1.45801 13.251C1.45801 13.8101 1.82801 14.1735 2.42634 14.4018" stroke="#0F1825" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>);
    } else if (navItem === 'Workspaces') {
      return (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.1767 10.0173H3.14258" stroke="#0F1825" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M10.7373 7.58789L13.1773 10.0179L10.7373 12.4479" stroke="#0F1825" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path opacity="0.4" d="M7.08691 6.15707V5.37957C7.08691 3.68374 8.46108 2.30957 10.1577 2.30957H14.2277C15.9194 2.30957 17.2902 3.6804 17.2902 5.37207V14.6554C17.2902 16.3512 15.9152 17.7262 14.2194 17.7262H10.1486C8.45775 17.7262 7.08691 16.3546 7.08691 14.6637V13.8787" stroke="#0F1825" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>);
    } else if (navItem === 'Security') {
      return (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7212 4.26977C16.0853 4.39727 16.3287 4.7406 16.3287 5.12643V10.7706C16.3287 12.3481 15.7553 13.8539 14.7428 15.0206C14.2337 15.6081 13.5895 16.0656 12.9053 16.4356L9.94033 18.0373L6.97033 16.4348C6.28533 16.0648 5.64033 15.6081 5.13033 15.0198C4.11699 13.8531 3.54199 12.3464 3.54199 10.7673V5.12643C3.54199 4.7406 3.78533 4.39727 4.14949 4.26977L9.63449 2.34227C9.82949 2.27393 10.042 2.27393 10.2362 2.34227L15.7212 4.26977Z" stroke="#0F1825" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path opacity="0.4" d="M7.76953 9.93158L9.3462 11.5091L12.5945 8.26074" stroke="#0F1825" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>);
    }
  };

  return (
    <Fragment>{renderIcon()}</Fragment>
  );
};

export default NavigationIcon;