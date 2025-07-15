import React, { useEffect, useState,useContext } from "react";
import { AppBar, Toolbar, styled, Button,Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'; 
import { Link } from 'react-router-dom';
import { DataContext } from '../context/DataProvider';
import { useNavigate } from 'react-router-dom';


const StyledTableWrapper = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    border: 2.5px solid;
    border-radius: 20px;
    border-color: white;
`;

const StyledTable = styled(Table)`
    width: 300px;
    background-color: rgba(0, 123, 255, 0.1);
    border-collapse: collapse;
    border-radius: 10px;
`;

const StyledTableRow = styled(TableRow)`
    background-color: rgba(0, 123, 255, 0.1);
`;

const StyledTableCell = styled(TableCell)`
    background-color: rgba(0, 123, 255, 0.1);
    color: #38bdf8;
    width: 100%;
    font-size: 20px;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;



export default function Menu  () {

    const navigate = useNavigate();
const { account } = useContext(DataContext);
    const logout = async () => navigate('/account');
        const cat=['All','Pending','Running','Completed','Failed'];   
    return (
        <StyledTableWrapper>
        <StyledTable>
                <TableHead>
                    <StyledTableRow>
                        <StyledTableCell>
                            <StyledLink to={"/"}>
                                STATUS
                            </StyledLink>
                        </StyledTableCell>
                    </StyledTableRow>
                </TableHead>
                <TableBody>
                    {
                        cat.map(status => (
                            
                            <StyledTableRow key={status}>
                                <StyledTableCell>
                                    <StyledLink to={`/task-list?status=${status=='All'?'':status}`}>
                                        {status}
                                    </StyledLink>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))
                    }
                </TableBody>
            </StyledTable>
        </StyledTableWrapper>
    );
};

