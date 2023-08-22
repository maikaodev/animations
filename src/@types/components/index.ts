export interface ItemProps {
  title: string;
  unfinishedTasks?: boolean;
  completeTask?: (param: string) => void;
  deleteTask?: (param: string) => void;
  returnTask?: (param: string) => void;
}
