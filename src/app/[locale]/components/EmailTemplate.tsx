import * as React from 'react';

interface EmailTemplateProps {
  email: string;
  message: string;
}

export function EmailTemplate({ email, message }: EmailTemplateProps) {
  return (
    <div>
      <h1>
        Welcome, {email}! {message}
      </h1>
    </div>
  );
}
