import verifyCredentials from './verify-credentials';
import isStillVerified from './is-still-verified';

export default {
  fields: [
    {
      key: 'host',
      label: 'Host',
      type: 'string' as const,
      required: true,
      readOnly: false,
      value: null,
      placeholder: null,
      description: 'The host information Automatisch will connect to.',
      docUrl: 'https://automatisch.io/docs/smtp#host',
      clickToCopy: false,
    },
    {
      key: 'username',
      label: 'Email/Username',
      type: 'string' as const,
      required: true,
      readOnly: false,
      value: null,
      placeholder: null,
      description: 'Your SMTP login credentials.',
      docUrl: 'https://automatisch.io/docs/smtp#username',
      clickToCopy: false,
    },
    {
      key: 'password',
      label: 'Password',
      type: 'string' as const,
      required: true,
      readOnly: false,
      value: null,
      placeholder: null,
      description: null,
      docUrl: 'https://automatisch.io/docs/smtp#password',
      clickToCopy: false,
    },
    {
      key: 'useTls',
      label: 'Use TLS?',
      type: 'dropdown' as const,
      required: false,
      readOnly: false,
      value: false,
      placeholder: null,
      description: null,
      docUrl: 'https://automatisch.io/docs/smtp#use-tls',
      clickToCopy: false,
      options: [
        {
          label: 'Yes',
          value: true,
        },
        {
          label: 'No',
          value: false,
        },
      ],
    },
    {
      key: 'port',
      label: 'Port',
      type: 'string' as const,
      required: false,
      readOnly: false,
      value: '25',
      placeholder: null,
      description: null,
      docUrl: 'https://automatisch.io/docs/smtp#port',
      clickToCopy: false,
    },
    {
      key: 'fromEmail',
      label: 'From Email',
      type: 'string' as const,
      required: false,
      readOnly: false,
      value: null,
      placeholder: null,
      description: null,
      docUrl: 'https://automatisch.io/docs/smtp#from-email',
      clickToCopy: false,
    },
  ],
  verifyCredentials,
  isStillVerified,
};
