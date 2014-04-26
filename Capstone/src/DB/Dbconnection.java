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
import java.util.Properties;

public class Dbconnection 
{
    public Connection getconn()
    {       
                 try {       
                    Class.forName("oracle.jdbc.driver.OracleDriver").newInstance();
                    Properties jdbcProperties = new Properties();
                    jdbcProperties.put("user", Queries.getQuery("dbUserName"));
                    jdbcProperties.put("password", Queries.getQuery("dbPassword"));
                    jdbcProperties.put("oracle.net.READ_TIMEOUT", "5000");
                    Connection con= DriverManager.getConnection(Queries.getQuery("conString"),jdbcProperties);
                    return con;
                    } 
                catch (Exception ex) 
                    {
                        Connection con=null;ex.printStackTrace();
                        return con;
                        
                    }
                
    }
}
