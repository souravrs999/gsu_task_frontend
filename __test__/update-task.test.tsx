import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import UpdateTask from "@/components/update-task"; // Ensure this path is correct

jest.mock("@/components/icons", () => ({
  Icons: {
    pen: () => <svg data-testid="pen-icon" />,
  },
}));

describe("UpdateTask Component", () => {
  const queryClient = new QueryClient();
  it("renders without crashing", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <UpdateTask
          task={{
            _id: "1",
            title: "Test Task",
            description: "Test Description",
            completed: false,
            createdAt: Date.now().toString(),
            updatedAt: Date.now().toString(),
          }}
        />
      </QueryClientProvider>
    );
    expect(screen.getByTestId("edit-task-btn")).toBeInTheDocument();
  });
});
