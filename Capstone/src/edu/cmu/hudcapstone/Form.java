/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.cmu.hudcapstone;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author senthil.dexter
 */
public class Form extends HttpServlet {

    /**
     * Processes requests for both HTTP
     * <code>GET</code> and
     * <code>POST</code> methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        try {
            if(request.getParameter("num").contentEquals("1"))
            {   
                new DB.Form().form1(request);
                response.sendRedirect("form2.html");
            }
            else if(request.getParameter("num").contentEquals("2"))
            {   
                new DB.Form().form2(request);
                response.sendRedirect("form3.html");
            } 
            else if(request.getParameter("num").contentEquals("3"))
            {   
                new DB.Form().form3(request);
                response.sendRedirect("form4.html");
            } 
            else if(request.getParameter("num").contentEquals("5"))
            {   
                new DB.Form().form4(request);
                response.sendRedirect("form5.html");
            }
            

            
            
            
            
            
            else if(request.getParameter("num").contentEquals("rentCal1"))
            {   
                new DB.Form().rentCal1(request);
                response.sendRedirect("rentCal2.html");
            }
            
            else if(request.getParameter("num").contentEquals("rentCal2"))
            {   
                new DB.Form().rentCal2(request);
                response.sendRedirect("rentCal3.html");
            }
            else if(request.getParameter("num").contentEquals("rentCal3"))
            {   
                new DB.Form().rentCal3(request);
                response.sendRedirect("rentCal4.html");
            }
            else if(request.getParameter("num").contentEquals("rentCal4"))
            {   
                new DB.Form_Steven().rentCal4(request);
                response.sendRedirect("rentCal5.html");
            }
            else if(request.getParameter("num").contentEquals("rentCal5"))
            {   
                new DB.Form_Steven().rentCal5(request);
                response.sendRedirect("rentCal6.html");
            }
            else if(request.getParameter("num").contentEquals("rentCal6"))
            {   
                new DB.Form_Shanshan().rentCal6(request);
                response.sendRedirect("rentCal7.html");
            }
            else if(request.getParameter("num").contentEquals("rentCal7"))
            {   
                new DB.Form_Shanshan().rentCal7(request);
                response.sendRedirect("rentCal8.html");
            }
            else if(request.getParameter("num").contentEquals("rentCal8"))
            {   
                new DB.Form_Shanshan().rentCal8(request);
                response.sendRedirect("rentCal9.html");
            }
            
        } finally {            
            out.close();
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP
     * <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP
     * <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>
}
