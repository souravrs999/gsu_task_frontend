/* eslint-disable react/display-name */
import { render, screen } from "@testing-library/react";

import TaskCard from "@/components/task-card";

jest.mock("@/components/task-completion-indicator", () => () => (
  <div>Completion Indicator</div>
));
jest.mock("@/components/update-task", () => () => <button>Update</button>);
jest.mock("@/components/delete-task", () => () => <button>Delete</button>);

describe("TaskCard Component", () => {
  const task = {
    _id: "1",
    title: "Test Task",
    description: "This is a test task description",
    completed: false,
    createdAt: Date.now().toString(),
    updatedAt: Date.now().toString(),
  };

  it("renders correctly with given task data", () => {
    render(<TaskCard task={task} />);

    expect(screen.getByText("Test Task")).toBeInTheDocument();
    expect(
      screen.getByText("This is a test task description")
    ).toBeInTheDocument();
    expect(screen.getByText("Completion Indicator")).toBeInTheDocument();
    expect(screen.getByText("Update")).toBeInTheDocument();
    expect(screen.getByText("Delete")).toBeInTheDocument();
  });
});
