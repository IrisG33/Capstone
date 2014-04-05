/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package DB;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;

/**
 *
 * @author senthil.dexter
 */
public class Insert {
    public int goAutoIncrement(String Query, ArrayList<TableColumns> tcList){
        Connection con = null;
        int auto_id=0;
        try
        {
        Dbconnection c = new Dbconnection();
        con = c.getconn();
                    PreparedStatement stmt = con.prepareStatement(Queries.getQuery("insert_"+Query),Statement.RETURN_GENERATED_KEYS);
                    int columnNum=1;
                    for (TableColumns tc: tcList) {
                            if(tc.datatype.contentEquals("String"))
                                stmt.setString(columnNum, tc.value);
                            else if(tc.datatype.contentEquals("Integer"))
                                stmt.setInt(columnNum, Integer.parseInt(tc.value));
                            
                            columnNum++;
                    }
                    
                    stmt.executeUpdate();
                    ResultSet rs = stmt.getGeneratedKeys();
                    if(rs.next())
                       auto_id = rs.getInt(1);
                    
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
                    int columnNum=1;
                    for (TableColumns tc: tcList) {
                            if(tc.datatype.contentEquals("String"))
                                stmt.setString(columnNum, tc.value);
                            else if(tc.datatype.contentEquals("Integer"))
                                stmt.setInt(columnNum, Integer.parseInt(tc.value));
                            
                            columnNum++;
                    }
                    
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
