import React from "react";

type TErrorBoundaryProps = {
  onError: ({ error }: { error: unknown }) => unknown;
  fallBack: React.ReactNode;
  children: React.ReactNode;
};
type TErrorBoundaryState = {
  hasError: boolean;
};

export class ErrorBoundary extends React.Component<
  TErrorBoundaryProps,
  TErrorBoundaryState
> {
  constructor(props: TErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }
  componentDidCatch(error: unknown) {
    // You can also log the error to an error reporting service
    this.props.onError({ error });
  }
  render() {
    const { fallBack, children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return fallBack;
    }

    return children;
  }
}
