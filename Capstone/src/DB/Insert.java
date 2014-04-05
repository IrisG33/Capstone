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
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;

/**
 *
 * @author senthil.dexter
 */
public class Insert {
    
    private PreparedStatement setStatement(ArrayList<TableColumns> tcList, PreparedStatement stmt) throws SQLException, ParseException{
        int columnNum=1;
        for (TableColumns tc: tcList) {
                if(tc.datatype.contentEquals("String"))
                    stmt.setString(columnNum, tc.value);
                else if(tc.datatype.contentEquals("Integer"))
                    stmt.setInt(columnNum, Integer.parseInt(tc.value));
                else if(tc.datatype.contentEquals("Date"))               
                    stmt.setDate(columnNum, new java.sql.Date(new SimpleDateFormat("MM/dd/yyyy").parse(tc.value).getTime()));
                columnNum++;
        }
        return stmt;
    }
    
    public int goAutoIncrement(String Query, ArrayList<TableColumns> tcList){
        Connection con = null;
        int auto_id=0;
        try
        {
            Dbconnection c = new Dbconnection();
            con = c.getconn();
            PreparedStatement stmt = con.prepareStatement(Queries.getQuery("insert_"+Query),Statement.RETURN_GENERATED_KEYS);
            stmt = setStatement(tcList, stmt);
            stmt.executeUpdate();
            ResultSet rs = stmt.getGeneratedKeys();
            if(rs.next())  auto_id = rs.getInt(1);
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
