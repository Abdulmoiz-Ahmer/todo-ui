import { IAddBoxProps } from "../add-box/IAddBoxProps";
import { IAddButtonProps } from "../add-button/IAddButtonProps";
import { IListProps } from "../list/IListProps";
import { IListItemProps } from "../list-item/IListItemProps";

export interface IToDoProps
  extends IAddBoxProps,
    IAddButtonProps,
    IListProps,
    IListItemProps {}
