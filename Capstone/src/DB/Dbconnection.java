/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package DB;

/**
 *
 * @author senthil
 */
import java.sql.Connection;
import java.sql.DriverManager;

public class Dbconnection 
{
    public Connection getconn()
    {       
                 try {       
                    Class.forName("oracle.jdbc.driver.OracleDriver").newInstance();
                    Connection con= DriverManager.getConnection(Queries.getQuery("conString"),Queries.getQuery("dbUserName"),Queries.getQuery("dbPassword"));
                    return con;
                    } 
                catch (Exception ex) 
                    {
                        Connection con=null;ex.printStackTrace();
                        return con;
                        
                    }
                
    }
}
