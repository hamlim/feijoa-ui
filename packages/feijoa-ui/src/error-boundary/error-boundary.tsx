"use client";
import { Component, ErrorInfo, ReactNode } from "react";

export class ErrorBoundary extends Component<
  | {
    fallback: ReactNode;
    children: ReactNode;
    onError?: (error: Error, info?: ErrorInfo) => void;
  }
  | {
    children: ReactNode;
    FallbackComponent: React.ComponentType<{
      error: Error;
      reset: () => void;
    }>;
    onError?: (error: Error, info?: ErrorInfo) => void;
  },
  { error: Error | null }
> {
  static getDerivedStateFromError(error: Error) {
    return { error };
  }
  state = { error: null };
  componentDidCatch(error: Error, info: ErrorInfo): void {
    this.props.onError?.(error, info);
  }
  render() {
    if (this.state.error) {
      if ("FallbackComponent" in this.props) {
        return (
          <this.props.FallbackComponent
            error={this.state.error}
            reset={() => {
              this.setState({ error: null });
            }}
          />
        );
      }
      return this.props.fallback;
    }
    return this.props.children;
  }
}
