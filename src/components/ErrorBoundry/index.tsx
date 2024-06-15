import React, { ReactNode } from 'react';
import CustomError from '../CustomError';

type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
  error: Error | null;
};

export default class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught in Error Boundary: ', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <CustomError title="Something went wrong, pls update page or try later" />;
    }

    return this.props.children;
  }
}
