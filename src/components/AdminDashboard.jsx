import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  TableSortLabel,
  Paper,
  TextField,
  CircularProgress,
  Box,
} from "@mui/material";
import { fetchBooks } from "./api";

const AdminDashboard = () => {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("title");
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const getBooks = async () => {
      setLoading(true);
      try {
        const data = await fetchBooks(page + 1, rowsPerPage);
        setBooks(data.docs);
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setLoading(false);
      }
    };
    getBooks();
  }, [page, rowsPerPage]);

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setPage(0);
  };

  const filteredBooks = books.filter((book) =>
    book.author_name?.[0]?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedBooks = () => {
    return [...filteredBooks].sort((a, b) => {
      if (orderBy === "author_name") {
        return (
          (a.author_name[0] < b.author_name[0] ? -1 : 1) *
          (order === "asc" ? 1 : -1)
        );
      }
      return (a[orderBy] < b[orderBy] ? -1 : 1) * (order === "asc" ? 1 : -1);
    });
  };

  return (
    
    <>
      <h1 className=" font-bold text-4xl" style={{ color: 'rgb(241, 128, 112)' }}>Nua - Front End Developer Intern Assignment</h1>
      <TextField
        label="Search by Author"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" my={4}>
          <CircularProgress />
        </Box>
      ) : (
        <Paper>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <TableSortLabel
                      active={orderBy === "ratings_average"}
                      direction={orderBy === "ratings_average" ? order : "asc"}
                      onClick={() => handleRequestSort("ratings_average")}
                    >
                      Ratings Average
                    </TableSortLabel>
                  </TableCell>
                  <TableCell>
                    <TableSortLabel
                      active={orderBy === "author_name"}
                      direction={orderBy === "author_name" ? order : "asc"}
                      onClick={() => handleRequestSort("author_name")}
                    >
                      Author Name
                    </TableSortLabel>
                  </TableCell>
                  <TableCell>
                    <TableSortLabel
                      active={orderBy === "title"}
                      direction={orderBy === "title" ? order : "asc"}
                      onClick={() => handleRequestSort("title")}
                    >
                      Title
                    </TableSortLabel>
                  </TableCell>
                  <TableCell>
                    <TableSortLabel
                      active={orderBy === "first_publish_year"}
                      direction={
                        orderBy === "first_publish_year" ? order : "asc"
                      }
                      onClick={() => handleRequestSort("first_publish_year")}
                    >
                      First Publish Year
                    </TableSortLabel>
                  </TableCell>
                  <TableCell>
                    <TableSortLabel
                      active={orderBy === "subject"}
                      direction={orderBy === "subject" ? order : "asc"}
                      onClick={() => handleRequestSort("subject")}
                    >
                      Subject
                    </TableSortLabel>
                  </TableCell>
                  <TableCell>
                    <TableSortLabel
                      active={orderBy === "author_birth_date"}
                      direction={
                        orderBy === "author_birth_date" ? order : "asc"
                      }
                      onClick={() => handleRequestSort("author_birth_date")}
                    >
                      Author Birth Date
                    </TableSortLabel>
                  </TableCell>
                  <TableCell>
                    <TableSortLabel
                      active={orderBy === "author_top_work"}
                      direction={orderBy === "author_top_work" ? order : "asc"}
                      onClick={() => handleRequestSort("author_top_work")}
                    >
                      Author Top Work
                    </TableSortLabel>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {sortedBooks().map((book, index) => (
                  <TableRow key={index}>
                    <TableCell>{book.ratings_average || "N/A"}</TableCell>
                    <TableCell>{book.author_name?.[0] || "N/A"}</TableCell>
                    <TableCell>{book.title}</TableCell>
                    <TableCell>{book.first_publish_year || "N/A"}</TableCell>
                    <TableCell>{book.subject?.join(", ") || "N/A"}</TableCell>
                    <TableCell>{book.author_birth_date || "N/A"}</TableCell>
                    <TableCell>{book.author_top_work || "N/A"}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 50, 100]}
            component="div"
            count={filteredBooks.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      )}
    </>
  );
};

export default AdminDashboard;
