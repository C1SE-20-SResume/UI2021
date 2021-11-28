import React, { Component } from "react";
import Style from "./StyleTable.css";

function TableCssForApplied() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th rowspan="1" colspan="2">
              Article
            </th>
            <th rowspan="2" colspan="2">
              Table
            </th>
            <th rowspan="1" colspan="2">
              Article
            </th>
            <th rowspan="2" colspan="2">
              Table
            </th>
          </tr>
          <tr>
            <th rowspan="2">Section</th>
            <th rowspan="2">Section</th>
            <th rowspan="2">Section</th>
            <th rowspan="2">Section</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableCssForApplied;
