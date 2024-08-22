import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import DeleteTask from "@/components/delete-task";

jest.mock("@/components/icons", () => ({
  Icons: {
    trash: () => <svg data-testid="pen-icon" />,
  },
}));

describe("DeleteTask Component", () => {
  const queryClient = new QueryClient();
  it("renders without crashing", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <DeleteTask
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
    expect(screen.getByTestId("delete-task-btn")).toBeInTheDocument();
  });
});
