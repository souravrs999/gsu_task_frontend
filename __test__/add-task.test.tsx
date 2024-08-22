import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AddTask from "@/components/add-task";

jest.mock("@/components/icons", () => ({
  Icons: {
    plus: () => <svg data-testid="pen-icon" />,
  },
}));

describe("UpdateTask Component", () => {
  const queryClient = new QueryClient();
  it("renders without crashing", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <AddTask />
      </QueryClientProvider>
    );
    expect(screen.getByTestId("add-task-btn")).toBeInTheDocument();
  });
});
