/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package DB;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Properties;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author senthil.dexter
 */
public class Insert {
    
    private PreparedStatement setStatement(ArrayList<TableColumns> tcList, PreparedStatement stmt){
        int columnNum=1;
        for (TableColumns tc: tcList) {
            try {
           //    System.out.println(tc.value);
                if(tc.datatype.contentEquals("String"))
                    stmt.setString(columnNum, tc.value);
                else if(tc.datatype.contentEquals("Integer"))
                    try{stmt.setInt(columnNum, Integer.parseInt(tc.value));}
                    catch(Exception ex){stmt.setInt(columnNum, 0);}
                else if(tc.datatype.contentEquals("Date"))               
                {
                    DateFormat dateFormat = new SimpleDateFormat("MM/dd/yyyy");
                    try{ 
                        stmt.setDate(columnNum, new java.sql.Date(dateFormat.parse(tc.value).getTime()) );
                    }
                    catch(Exception ex){
                        stmt.setDate(columnNum, new java.sql.Date(dateFormat.parse("1/1/2001").getTime()) );
                    }
                }
                else {System.out.println(tc.value+" implement this");}
                
                System.out.println(columnNum+":"+tc.value);
                columnNum++;
            } catch (Exception ex) {
                ex.printStackTrace();
            }
        }
        return stmt;
    }
    
   
    
    public String goAutoIncrement(String Query, ArrayList<TableColumns> tcList){
        Connection con = null;
        String auto_id="";
        try
        {
            Dbconnection c = new Dbconnection(); 
            con = c.getconn();       
     /*       
            
Statement statement = con.createStatement();
ResultSet rs1 = statement.executeQuery("SELECT SYSDATE FROM DUAL");
while(rs1.next()) {
System.out.println(rs1.getObject(1));
}
       */     
            PreparedStatement stmt = con.prepareStatement(Queries.getQuery("insert_"+Query),1);
            stmt = setStatement(tcList, stmt);
            stmt.executeUpdate();
            ResultSet rs = stmt.getGeneratedKeys();
            if(rs.next())  auto_id = rs.getString(1);
            if (stmt != null) stmt.close();
	}
        catch (Exception e){e.printStackTrace();}
        finally
	{
            try{if (con != null) con.close();} 
            catch (Exception e){e.printStackTrace();}
	}
        return auto_id;
    }
    public void go(String Query, ArrayList<TableColumns> tcList){
        Connection con = null;
        try
        {
            Dbconnection c = new Dbconnection();
            con = c.getconn();
            PreparedStatement stmt = con.prepareStatement(Queries.getQuery("insert_"+Query));
            stmt = setStatement(tcList, stmt);
            stmt.executeUpdate();                    
            if (stmt != null) stmt.close();
	}
        catch (Exception e){e.printStackTrace();}
        finally
	{
            try{if (con != null) con.close();} 
            catch (Exception e){e.printStackTrace();}
	}
    }
    
    
}
