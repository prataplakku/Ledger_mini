import React , {useState} from "react";
import "../styles/OverviewTable.css";
import { FaChevronDown } from "react-icons/fa";
import Logo from "../assets/icons/Logo";
import Status from "./Status"
import { getInitialsFromNames, capitalize } from "./helper";


const BORDER_COLORS = ["#ACE2C0", "#7dd3fc", "#fda4af", "#f6d6b8"];
const getBorderColor = (index) => BORDER_COLORS[index % BORDER_COLORS.length];

export default function OverViewTable({ tableData }) {
    const columns = [
        { name: "Name", order_index: 1 },
        { name: "Preparer", order_index: 7 },
        { name: "Reviewer", order_index: 9 },
        { name: "Status", order_index: 11 },
    ];

    const [openCategories, setOpenCategories] = useState([]);

    const toggleCategory = (categoryId) => {
        setOpenCategories((prev) =>
            prev.includes(categoryId)
                ? prev.filter((id) => id !== categoryId)
                : [...prev, categoryId]
        );
    };

    return (
        <div className="table-container">
            <table className="overview-table">
                <thead>
                    <tr className="table-header">
                        <th></th>
                        <th className="icon-column"></th>
                        {columns.map((column, idx) => (
                            <th key={idx} className="table-head">{column.name}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((item, index) => (
                        <React.Fragment key={index}>
                            <tr className="table-row">
                                <td className="border-indicator" style={{ backgroundColor: getBorderColor(index) }}></td>
                                <td className="icon-column" onClick={() => toggleCategory(item.name)}>
                                    {item.children && item.children.length > 0 && (
                                        <FaChevronDown className={`chevron-icon ${openCategories.includes(item.name) ? "rotate" : ""}`} />
                                    )}
                                </td>
                                <td className="name-column" onClick={() => toggleCategory(item.name)}>{capitalize(item.name)}</td>
                                <td>{renderUserCell(item.preparer)}</td>
                                <td>{renderUserCell(item.reviewer)}</td>
                                <td><Status status={item.status} /></td>
                            </tr>
                            {!openCategories.includes(item.name) && item.children?.map((child, idx) => (
                                <TableTaskFunction key={idx} account={child} getBorderColor={getBorderColor} categoryIndex={idx} />
                            ))}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

const renderUserCell = (user) => (
    user ? (
        <div className="user-cell">
            {user === "Fincore" ? <Logo className="logo" /> : <div className="user-initials">{getInitialsFromNames(user)}</div>}
            {user}
        </div>
    ) : <EmptyText />
);

const EmptyText = () => (
    <div className="empty-text">
        <div className="empty-circle"></div>
        <span>...</span>
    </div>
);

const TableTaskFunction = ({ account, getBorderColor, categoryIndex }) => (
    <tr className="table-row">
        <td className="border-indicator" style={{ backgroundColor: getBorderColor(categoryIndex) }}></td>
        <td className="icon-column"></td>
        <td className="name-column">{account.name}</td>
        <td>{renderUserCell(account.preparer)}</td>
        <td>{renderUserCell(account.reviewer)}</td>
        <td><Status status={account.status} /></td>
    </tr>
);
